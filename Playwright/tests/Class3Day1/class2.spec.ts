import { chromium,test } from '@playwright/test';
import {log} from "node:console";

test('Test to launch a browser', async()=> {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://login.salesforce.com/?locale=in");
  const url = page.url();
  const title = await page.title();
  console.log(url);
});

