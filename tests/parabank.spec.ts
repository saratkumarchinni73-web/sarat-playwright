import {test,expect,Locator}from "@playwright/test"



test("verify the Registration",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/register.htm")
await expect(page.getByAltText("ParaBank")).toBeVisible()
await expect (page.getByText("Signing up is easy!")).toBeVisible()


await page.locator('[name="customer.firstName"]').fill('playwright');
await page.locator('[name="customer.lastName"]').fill("lastname")
await page.locator('[name="customer.address.street"]').fill("india")
await page.locator('[name="customer.address.city"]').fill("rjy")
await page.locator('[name="customer.address.state"]').fill("Andhra")
await page.locator('[name="customer.address.zipCode"]').fill("543232")
await page.locator('[name="customer.phoneNumber"]').fill("9988775544")
await page.locator('[name="customer.ssn"]').fill("1234567890")
await page.locator('[name="customer.username"]').fill("user1")
await page.locator('[name="customer.password"]').fill("534534")
await page.locator('[name="repeatedPassword"]').fill("334534")
await page.getByRole("button",{name:"Register"}).click()
})

test.only("verify the login functionality",async({page})=>{
await page.goto("https://parabank.parasoft.com/parabank/register.htm")

await expect(page.getByRole("heading",{name:"Customer Login"})).toBeVisible()

await page.locator('[name="username"]').fill("Anusha112")
await page.locator('[name="password"]').fill("Anusha")
await page.getByRole("button",{name:"Log In"}).click()
await page.waitForTimeout(3000)

    
})