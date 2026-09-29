import {test,expect, chromium}from "@playwright/test"
// with all browser,browserconetext,context 
test("verify the with browser fixture",async( )=>{
    const Browser = await chromium.launch()
    const BrowserContext = await Browser.newContext()
    const page = await BrowserContext.newPage()
     await page.goto("https://www.amazon.in/")
})


test.only ("with browser fixture",async({browser})=>{
    //const Browser = await chromium.launch()
    const BrowserContext = await browser.newContext()//cookies,local storages,sesstions
    const page = await BrowserContext.newPage()
    await page.waitForTimeout(5000)
    await page.goto("https://www.amazon.in/")



})


test("verify the without browsercontext and context ",async({browser,context})=>{
  
  
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")

})  

test ("verify the context[tabs]",async({context})=>{
     const  page = await context.newPage();
     const  page1 = await context.newPage();
     const  page2 = await context.newPage();

     await page.goto("https://onlinesbi.sbi.bank.in/")
     await page1.goto("https://www.icici.bank.in/")
     await page2.goto("https://playwright.dev/")

    
})