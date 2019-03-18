using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PracticalApp.Migrations
{
    public partial class addedSalesItem3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SaleItems",
                columns: table => new
                {
                    SaleItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Distributor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EndUsers = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FieldOfficer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RetailShop = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaleItems", x => x.SaleItemId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SaleItems");
        }
    }
}
