import { test, expect } from "@playwright/test";

test("verify the simple dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.once("dialog", async (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("The inner text of the dialog box is:", dialog.message());
        expect(dialog.type()).toBe("alert");
        await dialog.accept();
    });

    await page.locator("#alertBtn").click();
});

test("verify the confirm dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.once("dialog", async (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("The inner text of the dialog box is:", dialog.message());
        expect(dialog.type()).toBe("confirm");
        //await dialog.dismiss();
        await dialog.accept();
    });

    await page.locator("#confirmBtn").click();
    const text:string = await page.locator("#demo").innerText()
    console.log("output text is :", text)
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
});

test.only("verify the prompt alert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
page.on("dialog",async dialog=>{
console.log(dialog.message())
console.log("Dialog type is:", dialog.type());
await dialog.accept("bindu")
const text:string =await  page.locator("#demo").innerText()
console.log("inner text is :",text)
//await dialog.dismiss()
})


await page.locator("[id='promptBtn']").click()
})







