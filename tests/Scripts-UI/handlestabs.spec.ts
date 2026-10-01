import {test,expect, chromium}from "@playwright/test"

test("handle tabs",async ({})=>{
// i am creating my own browser and pages
  const browser=  await chromium.launch()// create my own browser
  const context = await browser.newContext() //create my own browser context 

  //create 2 pages
  const adminpage = await context.newPage()
  //const supervisorpage = await context.newPage()

  await adminpage.goto("https://testautomationpractice.blogspot.com/")
  adminpage.waitForTimeout(5000)
  await adminpage.getByRole("button",{name:"New Tab"}).click()

  





})