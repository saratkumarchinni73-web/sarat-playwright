
import {test,expect,Locator}from "@playwright/test"
import { Automobile } from "../../InsurancePages/AutomobileInsurance/Automobile";

test("verify the enter vehical data", async ({ page }) => {

    const enterdata = new Automobile(page);

    await enterdata.goto();
    await enterdata.EnterVehicleData(
    'Honda',
    'nice',
    '10/05/1982',
    5,
    'Petrol',
    110000,
    243242,
    676

);
});