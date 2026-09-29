import { test } from "@playwright/test"
import { Loginpage } from "../Vehicle Insurance Application/pages/Pages/practicetestautomation";


test("verify the login function",async({page})=>{

    const loginpage = new Loginpage(page)


    await loginpage.goto();
    await loginpage.login("student","Password123")
    await page.waitForTimeout(5000)

})



