import {test,expect,Locator}from "@playwright/test"
//beforeEach method runs in every test case it's like precoinditions.
//afterEach method runs in  every test cases it's like a logout the page.


test.beforeEach(async ({page}) => {
    console.log(" i am test.before all method i am running in every test cases")
    await page.goto('https://support-hub.tricentis.com/open?id=tsm_registration');
});
test.beforeAll(async()=>{
    console.log("one time run")
})
test("case(1)verify the Registration",async({page})=>{
  
    expect(page.getByRole("img",{name:"Tricentis"})).toBeVisible
    expect(page.getByText("Registration")).toBeVisible

    await page.getByPlaceholder("First Name").fill("SARAT")
    await page.getByLabel("Last Name ").fill("MOSUGANTI")
    await page.getByPlaceholder("Mobile number").fill("9843435533")
    await page.getByLabel("Street/No").fill("23/1/53")
    const dd =page.locator("#country")
    await dd.selectOption("India")
    const fname = page.getByText("First Name ")
    await expect(fname).toBeAttached()
    const ss = page.locator("#salutation")
    //await ss.selectOption({index: 1})
    await ss.selectOption({value:"Mr."})
})
    // verify the city and zip code

test("case(2)verify the city and zipcode fields",async({page})=>{
        
        expect (page.getByPlaceholder("City")).toBeVisible
        await page.getByPlaceholder("City").fill("RAJAHUNDRY")
        const city = page.locator("[class='col-sm-5 control-label']").nth(6)
        expect(city).toBeVisible()
        const text = await city.innerText()
        console.log("The name of the city is :",text)
        expect (page.getByPlaceholder("Zip Code")).toBeVisible
        await page.getByPlaceholder("Zip Code").fill("533103")
  })
test("case(3)verify the all right side fields",async({page})=>{
 
 const language = page.locator("#language")
 await language.selectOption("German")
})

test("case(4)verify the TimeZone",async({page})=>{
const timezone = page.locator("#timezone")
expect(timezone).toBeAttached
await timezone.selectOption("Africa/Bangui")
})
 
test.afterAll(async()=>{
    console.log("clearn the test data")
})

test.afterEach(async({page})=>{

    console.log("after all has been ended")


})  



    



