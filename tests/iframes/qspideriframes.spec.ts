import {test,expect}from "@playwright/test"



test("verify outerframe",async({page})=>{

await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
const text =page.frameLocator("iframe").getByRole("heading",{name:"Login"})
await expect(text).toBeVisible()
const user =page.frameLocator("iframe").getByText("Username:")
await expect(user).toBeVisible()
const textinput = page.frameLocator("iframe").locator("#username")
await expect(textinput).toBeAttached()
await page.frameLocator("iframe").locator("#username").fill("sarat")
await page.waitForTimeout(5000)
await page.frameLocator("iframe").locator("#password").fill("1234")
await page.waitForTimeout(5000)
await page.frameLocator("iframe").locator("#submitButton").click()
})
test.only ("verify the inner frame",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
const parant =page.frameLocator('iframe').frameLocator('iframe')
.getByRole('heading', { name: 'Sign Up' })
await expect(parant).toBeVisible()


})
