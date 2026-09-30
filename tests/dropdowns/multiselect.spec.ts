import {test,expect}from"@playwright/test"

test("select multioptions",async({browser})=>{
const context = await browser.newContext()
const page= await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")
//Select by visable text
await page.locator('#colors').selectOption(['Red','Blue','Green'])
await page.waitForTimeout(5000)
 //Select by value
await page.locator('#colors').selectOption(['White','Green'])
//Select by index
await page.locator('#colors').selectOption([{index: 3}])
await page.waitForTimeout(5000)
})

test.only ("verify amazon ddvalues",async({page})=>{
await page.goto("https://www.amazon.in/")
//Select by visable text
/*await page.locator("#searchDropdownBox").selectOption("Computers & Accessories")
await page.waitForTimeout(5000)
await page.locator("#nav-search-submit-button").click()
//Select by attribute value search-alias=todays-deals
await page.locator("#searchDropdownBox").selectOption("search-alias=todays-deals")
await page.locator("#nav-search-submit-button").click()
await page.waitForTimeout(5000)*/
// Select By index
await page.locator("#searchDropdownBox").selectOption({index: 17})
await page.locator("#nav-search-submit-button").click()
await page.waitForTimeout(5000)
await page.locator("[aria-label='Personal Touch Melakey Radiance Cream for Hyperpigmentation & Melasma | 20gm | Pigmentation Removal Cream | 5% Azelaic Acid | Dark Spot Corrector with Glycolic Acid & Niacinamide for Even Skin Tone | Depigmentation']").click()
await page.waitForTimeout(5000)
await page.locator("[id='add-to-cart-button']").click()
await page.waitForTimeout(5000)
await page.locator("[name='proceedToRetailCheckout']").click()
await page.getByRole("img",{name: "PC_Tablets"}).click()
await page.waitForTimeout(5000)
await page.locator("[aria-label='Samsung Galaxy Tab A11+, 11-inch (27.82 CM), LCD Display, 6GB RAM, 128GB ROM, Wi-Fi+5G, Quad Speakers, Dolby Atmos, Gray, AI Enabled']").click()
await page.waitForTimeout(5000)
await page.locator("[submit.add-to-cart-announce']").click()
await page.waitForTimeout(5000)
await page.locator("[name='proceedToRetailCheckout']").click()





})