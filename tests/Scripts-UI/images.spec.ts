import {test,expect,Locator}from "@playwright/test"


/*//getByAltText:-for images and logos
test("verify the images", async({page})=>{

await page.goto("https://demo.nopcommerce.com/register")
//await page.getByAltText('nopCommerce demo store').click()
//await expect(page.getByRole("img",{name:"nopCommerce demo store"})).toBeVisible()
//await expect(page.locator("header-logo")).toBeVisible()
//const logo1 = page.locator('img[src*="logo.png"]');
//await expect(logo1).toBeVisible()



})*/

test("verify the logo of amazon ",async({page})=>{

await page.goto("https://www.amazon.in/")
//await expect(page.locator("#nav-logo-sprites")).toBeVisible()
//await expect(page.getByAltText("Amazon.in")).toBeVisible()
//await expect(page.getByRole("link",{name:"/ref=nav_logo"})).toBeVisible()


})
