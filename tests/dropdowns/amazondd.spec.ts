import {test,expect}from "@playwright/test"

test("add to cart",async({browser})=>{
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.amazon.in/")
await page.locator("#searchDropdownBox").selectOption({index: 17})
await page.locator("#nav-search-submit-button").click()
await page.waitForTimeout(5000)
await page.getByRole('link', {
  name: /Personal Touch Melakey Radiance Cream/
}).click();
await page.waitForTimeout(5000)
await page.locator("[id='add-to-cart-button']").click()
await page.waitForTimeout(5000)
await page.locator("[name='proceedToRetailCheckout']").click()





})