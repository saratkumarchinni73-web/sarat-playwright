import {test,expect,Page, Locator}from "@playwright/test"


export class Automobile{

readonly page:Page;
readonly Make:Locator
readonly EnginePerformance:Locator;
readonly DateofManufacture:Locator;
readonly numberofseats:Locator;
readonly FuelType:Locator;
readonly listprice:Locator;
readonly licenseplatenumber:Locator;
readonly AnnualMileage:Locator

constructor(page:Page){
    this.page=page
    this.Make=page.locator("#make")
    this.EnginePerformance=page.locator("#engineperformance")
    this.DateofManufacture=page.locator("#dateofmanufacture")
    this.numberofseats=page.locator("#numberofseats")
    this.FuelType=page.locator("#fuel")
    this.listprice=page.locator("#listprice")
    this.licenseplatenumber=page.locator("#licenseplatenumber")
    this.AnnualMileage=page.locator("#annualmileage")
}

async goto(){
await this.page.goto("https://sampleapp.tricentis.com/101/app.php")


}

async EnterVehicleData(bikename:string,perormance:string,enterdate:string,pleaseselect:number,fueltype:string,enterprice:number,anualmileage:number,lincennumber:number){
await this.Make.selectOption(bikename);
await this.EnginePerformance.fill(perormance);
await this.DateofManufacture.fill(enterdate);
await this.numberofseats.selectOption(String(pleaseselect));
await this.FuelType.selectOption(fueltype);
await this.listprice.fill(String(enterprice))
await this.AnnualMileage.fill(String(anualmileage));
await this.licenseplatenumber.fill(String(lincennumber))



}


}