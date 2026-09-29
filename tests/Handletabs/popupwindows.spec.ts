import {test,expect}from "@playwright/test"

test("handle popups",async({browser})=>{

const context = await browser.newContext();
const page =   await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")


await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])

await expect.poll(() => context.pages().length).toBe(3);

const allpopwindows = context.pages()
console.log("number of pages:",allpopwindows.length)

   
console.log(allpopwindows[0].url())
console.log(allpopwindows[1].url())
console.log(allpopwindows[2].url())
})