import {test,expect,Locator}from "@playwright/test"


test("verify login functionaity ",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
//await expect (page).toHaveURL(/www/)
//await expect(page).toHaveTitle("Google")

// images and it works based on "alt" atribute or image/area etc.
//const logo:Locator=page.getByAltText('Rahul Shetty Academy')
//logo.click()
const logo:Locator=page.getByAltText("Salesforce login")
expect(logo).toBeVisible
logo.click()

 const head:Locator = page.getByRole("heading",{name:'Salesforce login'})
 expect(head).toBeVisible
 

 await page.getByLabel("Username").fill("johan")
 await page.getByLabel("Password").fill("32324")
 
 page.getByRole("checkbox",{name:"Remember me"}).check
 
 
 await page.locator('#Login').click();

 //const email:Locator=page.getByText("Log In with Email")
 //email.click()
 
 //await page.goBack();

 page.getByRole("link",{name:'Try for Free'}).click

})