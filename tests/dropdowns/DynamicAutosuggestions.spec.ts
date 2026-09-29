import {test,expect,Locator}from "@playwright/test"


test("verify the autosuggestions dropdown",async({page})=>{

await page.goto("https://www.flipkart.com/search?q=smart&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
await page.waitForTimeout(2000)
await page.locator(".Vy9RSP").fill("samart")
await page.waitForTimeout(5000)
const options :Locator = page.locator('li.humcQA')
const count = await options.count()
console.log("The number of autosuggestions are :",count)
// i want to print the all suggestions options:
// for i have to use forlooping statments

for(let i =0;i<count;i++){

    console.log(await options.nth(i).innerText())
}

//selected smart watch//click on the smart watch

for(let i=0;i<count;i++){

    const text = await options.nth(i).innerText()
    if(text==="smartphone"){
        options.nth(i).click()
        break

    }
}




})