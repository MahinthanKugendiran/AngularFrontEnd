using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.Data.Entities
{
    public class SaleItem
    {
        [Key]
        public int SaleItemId {get;set;}
        public string Distributor { get; set; }
        public string FieldOfficer { get; set; }
        public string RetailShop { get; set; }
        public string EndUsers { get; set; }
    }
}
