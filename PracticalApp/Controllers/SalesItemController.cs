using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PracticalApp.Data;
using PracticalApp.ViewModels;

namespace PracticalApp.Controllers
{
    [Route("api/[Controller]")]
    public class SalesItemController : Controller
    {
        private readonly IPracticalAppRepository practicalAppRepository;

        public SalesItemController(IPracticalAppRepository practicalAppRepository)
        {
            this.practicalAppRepository = practicalAppRepository;
        }

        [HttpPost]
        [Route("addSalesItem")]
        public IActionResult AddSalesItem([FromBody]SalesItemViewModel salesItemViewModel )
        {
            try
            {
                if (ModelState.IsValid)
                {
                    return Ok(practicalAppRepository.AddSalesItem(salesItemViewModel));
                }
                else
                {
                    var errorList = (from item in ModelState.Values
                                     from error in item.Errors
                                     select error.ErrorMessage).ToList();

                    var ret_results = new
                    {
                        IsSuccess = false,
                        ReturnMsg = errorList
                    };

                    return Ok(ret_results);
                }
            }
            catch (Exception ex)
            {
                var ret_results = new
                {
                    IsSuccess = false,
                    REturnMsg = ex.Message
                };
                return Ok(ret_results);
            }
        }

        [Route("getSalesItem")]
        public IActionResult GetSalesItem()
        {

            try
            {
                return Ok(practicalAppRepository.GetSalesItem());
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("editSalesItem")]
        public IActionResult EditSalesItem([FromBody] SalesItemViewModel editedSalesItem)
        {
            try
            {

                if (ModelState.IsValid)
                {
                    return Ok(practicalAppRepository.EditSalesItem(editedSalesItem));
                }
                else
                {
                    var errorList = (from item in ModelState.Values
                                     from error in item.Errors
                                     select error.ErrorMessage).ToList();

                    var ret_results = new
                    {
                        IsSuccess = false,
                        ReturnMsg = errorList
                    };

                    return Ok(ret_results);
                }
            }
            catch (Exception ex)
            {
                var ret_results = new
                {
                    IsSuccess = false,
                    ReturnMsg = ex.Message
                };

                return Ok(ret_results);
            }
        }

    }

}
