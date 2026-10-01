import {test,expect,Locator}from "@playwright/test"


test("verify the text using get by label",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/register")

await page.getByLabel("First Name").fill("sarat")
await page.getByLabel("Last Name").fill("mosuganti")
await page.getByPlaceholder("email@example.com").fill("sarat.ganti@gmail.com")
await page.getByPlaceholder("enter your number").fill("9966114416")
await page.locator('select[formcontrolname="occupation"]').selectOption({ label: "Doctor" });
//await page.locator('input[name="Attended"][value="Upi"]').check()
await page.locator('input[type="radio"][value="Male"]').check()
await page.locator("#userPassword").fill("sarat#@")
await page.locator("#confirmPassword").fill("saratdsew")
await page.locator('input[type="checkbox"][formcontrolname="required"]').check();
await page.getByRole("button",{name:'Register'}).click()




})