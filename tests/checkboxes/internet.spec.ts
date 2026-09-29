import {test,expect}from "@playwright/test"
test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
    });

test("verify the text content",async({page})=>{

// verify the Usergraphical interface
const content = page.getByText("Checkboxes")
expect(content).toHaveText
const text = await content.innerText()
console.log(text)
})

test("verify the checkboxes",async({page})=>{
await page.locator("[type='checkbox']").first().check()
await page.locator("[type='checkbox']").first().uncheck()

await page.locator("[type='checkbox']").nth(1).check()
await page.locator("[type='checkbox']").nth(1).uncheck()

})