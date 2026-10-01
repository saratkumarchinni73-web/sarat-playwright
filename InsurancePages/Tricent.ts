import {Page,expect,Locator}from "@playwright/test"



export class WelcomePage{
// Page Related Locators
    readonly page:Page;
    readonly TricentisLogo:Locator
    readonly app_sub_title:Locator
    readonly app_version:Locator
    readonly Automobilelink:Locator
//maping 
constructor(page:Page){
    this.page = page;
    this.TricentisLogo=page.getByAltText("Tricentis Logo");
    this.app_sub_title=page.locator("#app_sub_title");
    this.app_version=page.locator("#app_version");
    this.Automobilelink=page.locator("('a').filter({ hasText: 'Automobile' }).first()")
}

//methods 

async goto (){
    await this.page.goto("https://sampleapp.tricentis.com/101/index.php#")
    
}
async welcome(){
  
await this.TricentisLogo.innerText()
await this.app_sub_title.innerText()
await this.app_version.textContent()
await this.Automobilelink.click()

}



}