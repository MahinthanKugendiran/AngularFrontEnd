using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PracticalApp.Data;
using PracticalApp.Data.Entities;
using PracticalApp.ViewModels;

namespace PracticalApp.Controllers
{
    [Route("api/[Controller]")]
    public class AdminController : Controller
    {
        private readonly IPracticalAppRepository practicalAppRepository;
        private readonly UserManager<UserDetails> userManager;
        private readonly SignInManager<UserDetails> signInManager;
        private readonly IConfiguration config;
        private readonly IHostingEnvironment hostingEnvironment;
        private readonly RoleManager<IdentityRole> roleManager;

        public AdminController(IPracticalAppRepository practicalAppRepository, UserManager<UserDetails> userManager,
             SignInManager<UserDetails> signInManager, IConfiguration config, IHostingEnvironment hostingEnvironment,
             RoleManager<IdentityRole> roleManager)
        {
            this.practicalAppRepository = practicalAppRepository;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.config = config;
            this.hostingEnvironment = hostingEnvironment;
            this.roleManager = roleManager;
        }

        [HttpPost]
        [Route("loggin")]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel loginViewModel)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByEmailAsync(loginViewModel.UserName);

                if (user != null)
                {
                    var result = await signInManager.CheckPasswordSignInAsync(user, loginViewModel.Password, false);

                    if (result.Succeeded)
                    {
                        //create the token 
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                        };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                            config["Tokens:Issuer"],//represents the name of issuer of token
                            config["Tokens:Audience"],//represents the audience  of token
                            claims,//to list of user roles(admin, manager )
                            expires: DateTime.UtcNow.AddMinutes(60),
                            signingCredentials: creds
                            );

                        var results = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),//string representation of JWT by call the WriteToken() method
                            expiration = token.ValidTo,
                            userRole = user.Role,
                            userId = user.Id,
                            userName = user.UserName,
                            userRoleId = user.RoleId
                        };
                        return Created("", results);

                    }
                }
            }

            return BadRequest();

        }
    }
}