import {test,expect, selectors}from "@playwright/test"



test("verify the auto-retrying assentions",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/register")
    

   
    await expect.soft(page.getByRole("link",{name:"Register"})).toBeHidden()
    await expect(page.getByRole("heading",{name:"Register"})).toBeVisible()
    await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible()
    await page.getByRole("link",{name:"Register"}).click()

    await page.locator("#gender-male").check()
    await page.locator ('#FirstName').fill("sarat kumar")
    await page.locator ('#LastName').fill("kumar")
    await page.locator ('#Email').fill("sarat.ganti@gmail.com")
     await page.locator('a[href="/books"]').first().click();
    // await page.goBack()
     await page.locator("#products-orderby").selectOption({label:"Price: Low to High"})
     await page.locator("#products-pagesize").selectOption({index:2})
     await page.locator("#products-viewmode").selectOption({index:1})
})