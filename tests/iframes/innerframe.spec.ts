import {test,expect}from "@playwright/test"



test("verify the outerIframe",async({page})=>{

await page.goto("https://testing.qaautomationlabs.com/iframe.php?utm_source=chatgpt.com")
//const iframe1 = page.frameLocator("[aria-label='Click me in iframe 1']").locator("[class='btn btn-primary btn-sm w-100']")
//await iframe1.click()
const content = page.frameLocator('[name="iframe1"]').getByText("I am iFrame 1")
expect(content).toBeVisible()
const meg = await content.innerText()
console.log(meg)
const clickme = page.frameLocator('[name="iframe1"]').locator("[aria-label='Click me in iframe 1']")
await clickme.click()
await page.waitForTimeout(1000)


const frame2 = page.frameLocator("[name='iframe2']").locator("[aria-label='Click me in iframe 2']")
expect(frame2).toBeVisible()
await frame2.click()

const content2 = page.frameLocator('[name="iframe2"]').getByText("I am iFrame 2")
const iframe2 = await content2.innerText()
console.log(iframe2)
const framemessage=page.locator("[data-testid='iframe-message']")
const displaysoft=await framemessage.innerText()
console.log(displaysoft)





})

