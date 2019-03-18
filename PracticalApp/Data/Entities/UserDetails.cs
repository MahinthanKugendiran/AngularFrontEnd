using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.Data.Entities
{
    public class UserDetails : IdentityUser 
    {
        public string Name { get; set; }
        public string EmpId { get; set; }
        public string Role { get; set; }
        public string RoleId { get; set; }
    }
}
