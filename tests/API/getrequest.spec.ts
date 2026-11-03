import {test,expect, request}from "@playwright/test"

test("verify the get request",async({request})=>{

const getresponce = await request.get("https://webservice.toscacloud.com/api/v1/Coffees")

    console.log("The status code is :",getresponce.status())
    console.log("The Body of the responce is :",getresponce)
    console.log(getresponce.json())
    console.log(getresponce.headers())
    console.log(getresponce.statusText())
    expect(getresponce.status()).toBe(200)


})