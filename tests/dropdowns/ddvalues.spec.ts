import {test,expect}from "@playwright/test"




test("verify the checkboxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const coundry = page.locator("#country")
    await coundry.selectOption("India")

    const colors = page.locator("#colors")
    await colors.selectOption("Blue")
    await expect(colors).toBeVisible()




})

test("verify the input fields",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await expect.soft(page.getByPlaceholder("Enter Names")).toBeVisible()
await expect.soft(page.getByAltText("ParaBank")).toBeVisible()
await expect.soft(page.getByPlaceholder("Enter EMail")).toBeVisible()

await page.getByPlaceholder("Enter Phone").fill("9933444343")

})

