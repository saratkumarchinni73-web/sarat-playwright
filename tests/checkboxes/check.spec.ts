import {test,expect}from "@playwright/test"




test("verify the coloumns",async({page})=>{

await page.goto("www.google.com")

expect(await page.getByRole("link",{name:"inputbox"})).toBeVisible









})

