import { chromium,test,expect } from '@playwright/test';
import {Console, log} from "node:console";

test('Test to launch a browser', async({page})=> {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();
    console.log("Launched Page: "+url);
    await page.fill("#username","DemoSalesManager");
    // await page.locator("//input[@id='password']").fill("crmsfa");
    await page.fill("#password","crmsfa");
    // await page.locator("//input[@value='Login']").click();
    await page.click("//input[@value='Login']");
    const launchTitle = await page.title();
    console.log("Launched inside application: "+launchTitle);
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.click("//a[contains(text(),'Leads')]");
    await page.click("//a[contains(text(),'Create Lead')]");
    await page.fill("#createLeadForm_companyName","CG");
    await page.fill("#createLeadForm_firstName","KP");
    await page.fill("#createLeadForm_lastName","Ramesh");
    await page.fill("#createLeadForm_personalTitle","Mrs.");
    await page.fill("#createLeadForm_generalProfTitle","Mrs.");
    await page.fill("#createLeadForm_annualRevenue","Rs.12L");
    await page.locator("//input[@name='departmentName']").fill("IT");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1242354");
    await page.locator("//input[@value='Create Lead']").click();
})