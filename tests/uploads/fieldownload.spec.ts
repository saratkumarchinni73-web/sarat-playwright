import {test,expect}from "@playwright/test"

test("download a file ",async({page})=>{
await page.goto("https://testing.qaautomationlabs.com/file-download.php")
await page.getByPlaceholder("Type your text here...").fill("This is sarat kumar")
await page.getByRole("button",{name:"Generate File"}).click()
const downloaded = await page.locator("[id='downloadLink']")
expect(downloaded).toBeVisible()
const dfile = await downloaded.innerText()
console.log(dfile)
await downloaded.click()
//approach 2

//Wait for download Event
})

test.only("Download a file approach2",async({page})=>{
await page.goto("https://testing.qaautomationlabs.com/file-download.php")
const downloadpromise= page.waitForEvent('download')
await page.getByPlaceholder("Type your text here...").fill("This is sarat kumar")
await page.getByRole("button",{name:"Generate File"}).click()
const downloaded = await page.locator("[id='downloadLink']")
expect(downloaded).toBeVisible()
const dfile = await downloaded.innerText()
console.log(dfile)
await downloaded.click()
const download = await downloadpromise
// save to specific path
 await download.saveAs('downloads/donwloadfile.txt');
// get download info
 await download.saveAs('downloads/donwloadfile.txt');
    console.log(await download.path());
    await page.waitForTimeout(5000);



})