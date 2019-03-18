using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PracticalApp.Data;
using PracticalApp.Data.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace PracticalApp
{
    public class Startup
    {
        private readonly IConfiguration config;
        private readonly IHostingEnvironment env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            this.config = config;
            this.env = env;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PracticalAppContext>(cfg =>
            {
                cfg.UseSqlServer(config.GetConnectionString("PracticalAppConnectionString"));
            });

            //config for Identy table usage 
            services.AddScoped<IPracticalAppRepository, PracticalAppRepository>();

            services.AddTransient<PracticalAppSeeder>();

            services.AddMvc(opt =>
            {
                if (env.IsProduction())
                {
                    opt.Filters.Add(new RequireHttpsAttribute());//to require secure https
                }
            }).AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            //----Employee Issue Tracker setup----
            services.AddIdentity<UserDetails, IdentityRole>(cfg =>
           {
               cfg.User.RequireUniqueEmail = true;

           }).AddEntityFrameworkStores<PracticalAppContext>();

            //this is for use authentication . these are two kinds of authentication ways.
            services.AddAuthentication()
                .AddCookie()//mentioning the authentication way as cookie
                .AddJwtBearer(//mentioning the authentication way as Bearer
                cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = config["Tokens:Issuer"],
                        ValidAudience = config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]))
                    };
                }
                );
           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseDefaultFiles(); // Like index.html files
            app.UseStaticFiles(); // Use wwwroot folder


            app.UseAuthentication();//setup for Employee Issue Tracker
         

            app.UseMvc(routes =>
            {
                routes.MapRoute("Default", "{controller=Login}/{action=Index}/{id?}");
            });


            if (env.IsDevelopment())
            {
                // Seed the database
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<PracticalAppSeeder>();
                    seeder.Seed().Wait();
                }
            }
        }
    }
}
