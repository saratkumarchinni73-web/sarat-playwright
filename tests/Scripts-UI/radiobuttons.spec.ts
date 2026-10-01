import {test,expect}from "@playwright/test"



test("verify radio buttons",async ({page})=>{

await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")


// Locate by name and value attributes 
await page.locator('input[name="Attended"][value="cod"]').check()
await page.waitForTimeout(3000)
await page.locator('input[name="Attended"][value="Upi"]').check()

page.locator('input[name="Attended"][value="office"]').check

//page.getByRole("button",{name:"Continue"}).click()




})