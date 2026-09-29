import {test,expect}from "@playwright/test"



test("verify the iframe",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames")

page.frameLocator('[src="frame_1.html"]').locator("[name='mytext1']").fill("sarat")


})


test.only("verify the Qspiders iframes",async({page})=>{

await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")

await page.frameLocator('iframe').getByLabel('Username:').fill("sarat")
await page.frameLocator('iframe').getByLabel('Username:').fill("pass")
})


