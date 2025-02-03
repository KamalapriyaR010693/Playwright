import { chromium,test,expect } from '@playwright/test';
import {Console, log} from "node:console";

test('Test to launch a browser', async({page})=> {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();
    console.log("Launched Page: "+url);
    // await page.locator("//input[@id='username']").fill("DemoSalesManager");
    await page.fill("//input[@id='username']","DemoSalesManager");
    // await page.locator("//input[@id='password']").fill("crmsfa");
    await page.fill("//input[@id='password']","crmsfa");
    // await page.locator("//input[@value='Login']").click();
    await page.click("//input[@value='Login']");
    const launchTitle = await page.title();
    console.log("Launched inside application: "+launchTitle);
});