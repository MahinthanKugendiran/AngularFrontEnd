using PracticalApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.Data
{
    public class PracticalAppContext : IdentityDbContext <UserDetails>
    {
        public PracticalAppContext(DbContextOptions<PracticalAppContext> options) : base(options)
        {

        }

     
        public DbSet<SaleItem> SaleItems { get; set; }
    }
}
