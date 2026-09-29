import {test,expect}from "@playwright/test"


test("verify the iframe1",async({page})=>{

await page.goto("https://testing.qaautomationlabs.com/iframe.php?utm_source=chatgpt.com")
// i captured outerframe and i given content validations with Assertions
const fmessage = page.frameLocator('[name="iframe1"]').getByRole('heading', { name: 'I am iFrame 1' })
const iamiframe = await fmessage.allTextContents()
console.log("This message on i am iframe 1 :",iamiframe)
const clickme = page.frameLocator('[name="iframe1"]').locator("[aria-label='Click me in iframe 1']")

await clickme.click()
await expect(fmessage).toBeVisible()
await expect(fmessage).toBeAttached()
await expect(clickme).toContainText("CLick Me")
const iframemessage= page.locator("[id='message']")
await expect(iframemessage).toBeAttached()
const text = await iframemessage.allTextContents();
console.log("Message on the webpage is :",text)

})
test("verify the iframe2",async({page})=>{

await page.goto("https://testing.qaautomationlabs.com/iframe.php?utm_source=chatgpt.com")
const fmessage = page.frameLocator('[name="iframe1"]').getByRole('heading', { name: 'I am iFrame 1' })
const iamiframe = await fmessage.allTextContents()

})



