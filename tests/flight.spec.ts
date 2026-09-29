import {test,expect}from "@playwright/test"



test("verify the checkboxes",async({page})=>{

await page.goto("https://www.ixigo.com/")
//await page.locator("(//p[contains(text(),'Hotels')])[1]").click()

await page.waitForTimeout(4000)
// If you specifically want the first image
await page.locator('//img[@alt="ixigo Trains"]').first().click();







})