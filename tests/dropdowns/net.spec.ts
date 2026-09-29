import {test,expect}from "@playwright/test"


test.beforeEach(async({page})=>{
await page.goto("https://the-internet.herokuapp.com/dropdown")
})

test("verify the dropdownvalues",async({page})=>{
    await page.locator("[id='dropdown']").selectOption("Option 1")
    await page.locator("[id='dropdown']").selectOption("Option 2")
    

})