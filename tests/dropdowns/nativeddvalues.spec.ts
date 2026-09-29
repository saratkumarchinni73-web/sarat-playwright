import {test,expect}from "@playwright/test"


test("verify the native dropdown values",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/dropdown")

console.log("welcome to the dropdown values")
await page.waitForTimeout(3000)
await page.locator("#dropdown").selectOption("Option 1")
await page.waitForTimeout(3000)
await page.locator("#dropdown").selectOption("Option 2")
page.getByRole("heading",{name:"Dropdown List"})
expect(page.getByText("Please select an option")).toHaveText
})

test("verify the select dropdown",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.locator("#dropdown-class-example").filter({hasText:"Option2"})
})

test("native dropdown actions ",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
expect (page.getByLabel("Country:")).toHaveText
await page.locator("#country").selectOption("India")
page.locator("#country").filter({ hasText: "Germany" })

})