import {test,expect}from "@playwright/test"

test("verify the hard error message",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/register")
// don't write fill any fields click on the register button
await page.locator("#login").click()
// verify the first name hard error messagee and assitions
//firstname:
const errorMessage = page.locator(".invalid-feedback").first();
expect(errorMessage).toBeAttached()
const text = await errorMessage.innerText();
console.log("Error message:", text);
//email:
const emailmsg=page.locator(".invalid-feedback").nth(1)
expect(emailmsg).toBeAttached();
const secondmeg = await emailmsg.innerText()
console.log("Error message two is :",secondmeg)
})

test("verify the hard error messages",async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("#Login").click()
const user = page.getByText('Error: Please enter your username.', { exact: true })
expect(user).toBeVisible();
const usermesg = await user.innerText()
console.log("Message on inputfile:",usermesg)


})

test.only ("verify the email hard error",async({page})=>{
await page.goto("https://welcome.salesforce.com/")
await page.locator("[class='slds-button slds-button--brand slds-button_stretch slds-m-bottom_x-small gid-button slds-m-top--small']").click()
const emailvalid = page.locator("[class='slds-form-element__help slds-text-color_error']")
expect(emailvalid).toBeVisible()
const emailhardmsg = await emailvalid.innerText()
console.log("Fill a valid email :",emailhardmsg)
})