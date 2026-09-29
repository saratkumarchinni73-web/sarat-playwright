import {test,expect}from "@playwright/test"




test("verify the checkboxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const sun=page.getByLabel("Sunday")
    expect (await sun.check())
    sun.isChecked
    await expect(sun).toBeVisible()
    await expect(sun).toBeEnabled()
    await sun.uncheck()

})