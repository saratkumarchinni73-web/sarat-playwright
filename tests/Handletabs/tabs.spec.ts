import {test,expect,chromium } from "@playwright/test"

//i want to handle the multiple tabs and perform some actions on pages.
// preconditons: [1]create a browser [2]  create a context

test("verify the multiple tabs",async()=>{
    const Browser = await chromium.launch()
    const context = await Browser.newContext()
    
// creating 1 page(paraent page)
const paraentpage = await context.newPage()
await paraentpage.goto("https://testautomationpractice.blogspot.com/")
await paraentpage.waitForTimeout(4000)
await Promise.all([context.waitForEvent('page'),paraentpage.getByText("New Tab").click()])

// Switch to Pages and get titles(using context) Best practice for multiple tabs
const pages = context.pages() // return an array 
console.log("Number of pages have been created:",pages.length)
console.log("The title of the Parent are :",await pages[0].title())
console.log("The title of the Child are :",await pages[1].title())


 
})





