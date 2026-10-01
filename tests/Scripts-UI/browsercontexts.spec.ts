import {test,expect, chromium}from "@playwright/test"

test("verify the browsercontext",async ({})=>{
// i am creating my own browser and pages
  const browser=  await chromium.launch()// create my own browser
  const context = await browser.newContext() //create my own browser context 

  //create 2 pages
  const adminpage = await context.newPage()
  const supervisorpage = await context.newPage()

  await adminpage.goto("https://playwright.dev/")
  await supervisorpage.goto("https://www.selenium.dev/")
  





})