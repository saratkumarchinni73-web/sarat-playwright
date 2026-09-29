/*SelectOption()
getByRole('option')
locator('option')
inputValue()
toHaveValues()*/

// what is return type of locator ?
// page.locator() returns a Locator object. A Locator represents an element or a set of elements and is used to perform actions 
// and assertions such as click(), fill(), toBeVisible(), etc.

//important: to display the dd values in the terminal i am using map() method it will display
// like a array format ..
//By using aassetions  we can get the contains text 

// check an option present in the dropdown values


import {test,expect, Locator}from "@playwright/test"

test("check the option present in the dropdown ",async({browser})=>{

const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")

//check number of options in the dd values
const dropdownoptions:Locator= page.locator('#country option')

await expect(dropdownoptions).toHaveCount(10)

// *******************check a options are present or not ?********************

const optionstexts =await dropdownoptions.allTextContents()//I  capturing all the text stored into the options text
console.log(optionstexts)

// i want to only text without any spance and coma.
const optionstext =(await dropdownoptions.allTextContents()).map(trimthetext=>trimthetext.trim())
console.log(optionstext)
//validations: check india is present or not
expect(optionstext).toContain('india')

})




