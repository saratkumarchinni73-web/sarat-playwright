import { test, expect, chromium } from "@playwright/test";

test("verify the multiple tabs", async () => {

    const Browser = await chromium.launch();
    const context = await Browser.newContext();

    // Page 1 - Parent page
    const parentPage = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // Open Page 2
    await Promise.all([
        context.waitForEvent("page"),
        parentPage.getByText("New Tab").click()
    ]);

    // Get all pages
    const pages = context.pages();

    console.log("Number of pages:", pages.length);

    // Page 1
    const page1 = pages[0];

    // Page 2
    const page2 = pages[1];

    // -------------------------
    // Perform actions on Page 2
    // -------------------------

    console.log("Page 2 title:", await page2.title());

    await page2.getByRole("heading").first().click();

    console.log("Action performed on Page 2");

    // -------------------------
    // Come back to Page 1
    // -------------------------

    await page1.bringToFront();

    console.log("Now working on Page 1");

    // Perform action on Page 1
    console.log("Page 1 title:", await page1.title());

});