import {test,chromium,ChromiumBrowser}from "@playwright/test"

test("OpenChromeBrowser",async()=>{
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage()
await page.goto("https://www.programiz.com/typescript/online-compiler/")
})