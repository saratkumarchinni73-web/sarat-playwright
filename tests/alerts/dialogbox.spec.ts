import {test,expect}from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
})


test("verify the dialogboxes[jsAlert]",async({page})=>{

page.on('dialog',async box=>{

console.log(box.message())

await box.accept()


})

const button= page.getByRole("button",{name:"Click for JS Alert"})
expect(button).toBeVisible();
await button.click();
await page.waitForTimeout(4000)
const text = await button.innerText();
console.log(text)
})

test("click on the JS Confirm",async({page})=>{
page.on('dialog',async Ok=>{
console.log(Ok.message)
//await Ok.accept()
await Ok.dismiss()
})

const jsbutton = page.getByRole("button",{name:"Click for JS Confirm"})
expect(jsbutton).toBeVisible()
await jsbutton.click();
const content = await jsbutton.innerText()
console.log(content)

})