using PracticalApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.Data
{
    public class PracticalAppSeeder
    {
        private readonly PracticalAppContext ctx;
        private readonly UserManager<UserDetails> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public PracticalAppSeeder(PracticalAppContext ctx, UserManager<UserDetails> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task Seed()
        {
            try
            {
                //create role
                string id = "2";
                var result_ex = await roleManager.FindByIdAsync(id);

                if (result_ex == null)
                {
                    var role = new Microsoft.AspNetCore.Identity.IdentityRole();
                    role.Id = id;
                    role.Name = "FieldOfficer";
                    role.NormalizedName = "FIELDOFFICER";
                    var result = await roleManager.CreateAsync(role);
                }

                //create user
                UserDetails user = null;
                var result_ex2 = await userManager.FindByEmailAsync("fieldOfficer@gmail.com");
                if (result_ex2 == null)
                {
                    user = new UserDetails()
                    {
                        UserName = "FieldOfficer",
                        Email = "fieldOfficer@gmail.com",
                        PhoneNumber = "0771234552",
                        Role= "FieldOfficer",
                        RoleId = id

                    };
                    var result2 = await userManager.CreateAsync(user, "Fofficer@123");

                    if (result2.Succeeded)
                    {
                        var role2 = roleManager.FindByIdAsync(id);
                        var roleResult = await userManager.AddToRoleAsync(user, role2.Result.Name);
                    }
                }
            }
            catch (Exception ex)
            {

            }
        }
    }
}
