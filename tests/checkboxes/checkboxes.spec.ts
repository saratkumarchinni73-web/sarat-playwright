import {test,expect}from "@playwright/test"



test("verify the checkboxes",async({page})=>{

await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

//await page.getByLabel("Email").check()
//await page.locator('#Email').check()
//await page.getByRole("checkbox",{name:'Eamil'}).check()
await page.locator('#domain_b').check()
await page.waitForTimeout(3000)
await page.locator('#domain_b').uncheck()
await page.locator('#mode_e').check()




})