import {test,expect}from "@playwright/test"


test("verify the webtables for the books",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/register")

//await page.getByRole("link",{name:"Books"}).first().click()
await page.locator(".header").filter({hasText:"header-menu"})
.getByRole("link",{name:"Books"}).click({timeout:3000})




})