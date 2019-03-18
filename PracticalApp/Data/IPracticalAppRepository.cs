using PracticalApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using PracticalApp.ViewModels;

namespace PracticalApp.Data
{
    public interface IPracticalAppRepository
    {
        bool SaveAll();

        object AddEntity(object model);

        object AddSalesItem(SalesItemViewModel salesItemViewModel);
        string GetSalesItem();

        object EditSalesItem(SalesItemViewModel editedSalesItem);

    }
}