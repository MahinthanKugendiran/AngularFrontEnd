using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.ViewModels
{
    public class SalesItemViewModel
    {
        public int SaleItemId { get; set; }
        public string Distributor { get; set; }
        public string FieldOfficer { get; set; }
        public string RetailShop { get; set; }
        public string EndUsers { get; set; }
    }
}
