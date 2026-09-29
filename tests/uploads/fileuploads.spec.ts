import {test,expect}from "@playwright/test"

test("verify the fileupload apporach 1",async({page})=>{
await page.goto("https://testing.qaautomationlabs.com/file-upload.php")
const text = page.getByText("File Upload Demo")
expect(text).toBeAttached()
const innertext = await text.innerText()
console.log(innertext)
await page.locator("[data-testid='upload-browse-btn']").setInputFiles("downloads/donwloadfile.txt")
})