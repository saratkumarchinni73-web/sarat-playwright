import {test,expect}from "@playwright/test"





test("verify the ddvalues",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

//await page.getByRole("List",{name:"country"}).selectOpetions({index:4})
//await page.locator("#country").selectOption("France")
await page.waitForTimeout(3000)
await page.locator("#country").selectOption({index:5})





})