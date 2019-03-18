using PracticalApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using PracticalApp.ViewModels;

namespace PracticalApp.Data
{
    public class PracticalAppRepository : IPracticalAppRepository
    {
        private readonly PracticalAppContext ctx;
        private readonly UserManager<UserDetails> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public PracticalAppRepository(PracticalAppContext ctx, UserManager<UserDetails> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public bool SaveAll()
        {
            try
            {
                return ctx.SaveChanges() > 0;
            }
            catch (Exception)
            {
                return false;
            }

        }

        public object AddEntity(object model)
        {
           return this.ctx.Add(model).Entity;
        }

     

        public object AddSalesItem(SalesItemViewModel salesItemViewModel)
        {
            try
            {
                var salesItemtTable = new SaleItem();

                salesItemtTable.Distributor = salesItemViewModel.Distributor;
                salesItemtTable.EndUsers = salesItemViewModel.EndUsers;
                salesItemtTable.RetailShop = salesItemViewModel.RetailShop;
                salesItemtTable.FieldOfficer = salesItemViewModel.FieldOfficer;

                var addedStudent = AddEntity(salesItemtTable);

                if (SaveAll())
                {
                    var ret_results = new
                    {
                        IsSuccess = true,
                        Data = addedStudent,
                        ReturnMsg = "New SalesItem Added Successfully"
                    };
                    return ret_results;
                }
                else
                {
                    var ret_results = new
                    {
                        IsSuccess = false,
                        Data = addedStudent,
                        ReturnMsg = "New SaleItem adding opearation failed"
                    };

                    return ret_results;
                }

            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string GetSalesItem()
        {
            try
            {
                var result = (from p in ctx.SaleItems
                              select new
                              {
                                  p.SaleItemId,
                                  p.Distributor,
                                  p.EndUsers,
                                  p.FieldOfficer,
                                  p.RetailShop

                              }).ToList();

                return JsonConvert.SerializeObject(result); ;
            }

            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public object EditSalesItem(SalesItemViewModel editedSalesItem)
        {
            try
            {
                var SalesitemTbl = new SaleItem();

                SalesitemTbl.SaleItemId = editedSalesItem.SaleItemId;
                SalesitemTbl.Distributor = editedSalesItem.Distributor;
                SalesitemTbl.FieldOfficer = editedSalesItem.FieldOfficer;
                SalesitemTbl.EndUsers = editedSalesItem.EndUsers;
                SalesitemTbl.RetailShop = editedSalesItem.RetailShop;

                var updatedSales = ctx.SaleItems.Update(SalesitemTbl);

                if (SaveAll())
                {
                    var ret_results = new
                    {
                        IsSuccess = true,
                        ReturnMsg = "Salesitem is  Edited successfully"
                    };

                    return ret_results;
                }
                else
                {
                    var ret_results = new
                    {
                        IsSuccess = false,
                        ReturnMsg = "SalesitemTbl Editing Operarion is Failed"
                    };

                    return ret_results;
                }
            }
            catch (Exception ex)
            {
                var ret_results = new
                {
                    IsSuccess = false,
                    ReturnMsg = ex.Message
                };

                return ret_results;
            }
        }





    }
}
