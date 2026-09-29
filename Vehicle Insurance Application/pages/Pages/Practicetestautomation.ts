import {test,expect,Locator, Page}from "@playwright/test"


export class Loginpage{
readonly page:Page
readonly usernameinput:Locator
readonly userpasswordinput:Locator
readonly loginbutton:Locator

constructor (page:Page){
this.page=page;
this.usernameinput=page.locator("#username")
this.userpasswordinput=page.locator("#password")
this.loginbutton=page.locator(".btn")
}

async goto(){
 await this.page.goto("https://practicetestautomation.com/practice-test-login/")

}
async login(username:string,password:string){
await this.usernameinput.fill(username)
await this.userpasswordinput.fill(password)
await this.loginbutton.click()    
}

}