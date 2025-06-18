import { test, expect } from '@playwright/test';
import path from 'path';
import variables from '/workspaces/Bullvpn/tests/variable.js';

async function forlogin(page) {
   await page.goto(variables.startpack.bullvpnlogin);
     await page.waitForTimeout(1000);
    await page.getByPlaceholder('Username').fill(variables.startpack.Username)
    await page.getByPlaceholder('Password').fill(variables.startpack.password)
    await page.getByRole('button', { name: 'Login' }).click();
     await page.waitForTimeout(3000);

};

test.describe('logintotestaction', () => {
  let page;
  test.setTimeout(0);
 test.beforeAll(async ({ browser }) => {
    await test.slow();
    page = await browser.newPage();
    await page.setDefaultTimeout(0);
    await forlogin(page); 
  });
   //เริ่มเคสแรกตรงนี้ ทดสอบกดไปที่ดาวน์โหลด bullvpn for windows และเช็คว่าไปหน้านั้นจริงไหม
test('downloadwindows', async () => {
  await page.goto(variables.startpack.bullmain);
  await page.getByRole('link', { name: 'BullVPN for Windows Download' }).click();
  const downloadW = await page.locator('.setup-content h2').textContent();
  expect(downloadW?.trim().toLowerCase()).toBe('bullvpn for windows');
})





})
