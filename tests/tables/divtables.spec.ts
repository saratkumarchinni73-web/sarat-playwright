import {test,expect}from "@playwright/test"



test("verify the customes values",async({page})=>{
page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")
await page.getByRole("button",{name:" Login "}).click()

await page.getByText("PIM").click()

//DIV table oprations
//1st point table recongation 
const divtable = page.locator(".oxd-table.orangehrm-employee-list")
const divtableheader = page.locator(".oxd-table-header")
const divtablebody = page.locator(".oxd-table-body")
const rows= page.locator(".oxd-table-card")
// go to first row and fetach the data before just count them how many rows are there
await page.waitForTimeout(5000)
console.log("The total count of the tables",await rows.count())

// capturing the rows the data 


let allrows = await rows.first().allInnerTexts()
console.log(allrows)

let totalallrows = await rows.allTextContents()
console.log(totalallrows)

await page.waitForTimeout(5000)






})