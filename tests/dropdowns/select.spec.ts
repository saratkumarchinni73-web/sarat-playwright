import {test,expect}from "@playwright/test"
// if single select dropdown tag is there and it's having all options

// Interview questions : if the same attribute in the DOM playwright throw an error
// Select Element Strict Mode Vialation


test("handle select drop-downs",async({browser})=>{
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")
//Approach 1 is Select By Visible Text

await page.locator("#country").selectOption("India")

// Approach 2 is Select By Value attribute ({value:'value name'})
await page.locator("#country").selectOption({value: 'uk'})

// Approach 3 is Select By label
await page.locator("#country").selectOption({label: 'uk'})
// Approach 4 is Select By Index

 await page.locator("#country").selectOption({index: 5})
// validations of the inner text 
const text = page.getByText("Country:")
await expect(text).toBeAttached()
const innertext = await text.innerText()
console.log(innertext)

})