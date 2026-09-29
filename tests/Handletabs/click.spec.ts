import {test,expect}from "@playwright/test"

test("handle popups",async({browser})=>{

const context = await browser.newContext();
const page =   await context.newPage()
await page.goto("https://playwright.dev/")
await page.getByRole('link', { name: 'Get started' }).click();

})
