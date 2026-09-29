import {test,expect}from "@playwright/test"


test("handlepopups",async({browser})=>{

const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")

// inorder to capture the event we have to use waitforEvent("popup")method 
//page.waitForEvent('popup')
//await page.locator("#PopUp").click()

await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])
//expect.poll() ensures the second popup has also been created before you check the count.

await expect.poll(() => context.pages().length).toBe(3);

const allpagescount = context.pages()

console.log("Number of page are :",allpagescount.length)
// to get the name of the URL


console.log(allpagescount[0].url())// https://testautomationpractice.blogspot.com/
console.log(allpagescount[1].url())// https://www.selenium.dev/
console.log(allpagescount[2].url())// https://playwright.dev/

// i want to go paywright window do a certain actions
// close the window

for(const pw of allpagescount){
    const title = await pw.url()
    if(title.includes('https://playwright.dev/')){
        await pw.getByRole('link', { name: 'Get started' }).click();
        await pw.close()

    }
}

await page.waitForTimeout(5000)



})






