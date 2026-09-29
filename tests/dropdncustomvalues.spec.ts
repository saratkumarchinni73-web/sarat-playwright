import {test,expect}from "@playwright/test"



test("verify the customes values",async({page})=>{
page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")
await page.getByRole("button",{name:" Login "}).click()
await page.waitForTimeout(3000)
await page.getByText("PIM").click()
// index base 
await page.locator(".oxd-select-text-input").first().click()
await page.waitForTimeout(3000)
await page.getByText("Full-Time Contract").click()

await page.locator(".oxd-select-text-input").last().click()
await page.waitForTimeout(3000)
await page.getByText("Finance").click()

//filter base




})