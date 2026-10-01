import {test,expect}from "@playwright/test"

test("add to cart",async({browser})=>{
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.amazon.in/")
await page.locator("#searchDropdownBox").selectOption({index: 17})


await page.locator("#nav-search-submit-button").click()
await page.waitForTimeout(5000)
await page.locator("[aria-label='PC_Tablets']").click()
await page.waitForTimeout(5000)
await page.locator("[aria-label='Moto Pad 60 Neo 5G (Pantone Bronze Green, 128, GB, 4, GB)']").click()
await page.waitForTimeout(5000)
await page.locator("[aria-labelledby='submit.buy-now-announce']").click()
await page.waitForTimeout(5000)

})