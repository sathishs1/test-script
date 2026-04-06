const { test, expect,chromium } = require("@playwright/test");


test.describe.serial("Login Validations", () => {

  
   let page;
   let context;
   test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
  
    await page.goto("https://app.nowdigitaleasy.com/auth/login");

    if (page.url() === "https://app.nowdigitaleasy.com/auth/login") {
      console.log("Successfully navigated to the login page");
    } else {
      console.log("Failed to navigate to the login page");
    } 
  });


  
  test("Test 1 - Empty email field", async () => {
    

    //ait page.goto("https://app.nowdigitaleasy.com/auth/login");

    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    await page.screenshot({ path: "screenshot_test1.png", fullPage: true });
    console.log("📸 Check screenshot_test1.png to see the error message");

    await page.waitForTimeout(2000);
  });


  test("Test 2 - Uppercase email", async () => {

    //ait page.goto("https://app.nowdigitaleasy.com/auth/login");
    await page.waitForLoadState("networkidle");

    await page.locator('[name="email"]').fill("NEWDEMO@GMAIL.COM");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    await expect(
      page.getByText("No Email Found", { exact: false })
    ).toBeVisible();

    await page.waitForTimeout(3000);
  });


  
  test("Test 3 - Wrong password", async () => {

    //ait page.goto("https://app.nowdigitaleasy.com/auth/login");
    await page.waitForLoadState("networkidle");
  
    await page.locator('[name="email"]').fill("newdemo@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

    await page.locator('[name="password"]').fill("admin1231");
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForTimeout(2000);

    await expect(
      page.getByText("Invalid email or password", { exact: false })
    ).toBeVisible();

    await page.waitForTimeout(3000);
  });


 
  test("Test 4 - Clear email and try without password", async () => {

   //wait page.goto("https://app.nowdigitaleasy.com/auth/login");
     await page.getByRole("link", { name: "Change" }).click()
    await page.waitForLoadState("networkidle");

   
    await page.locator('[name="email"]').fill("newdemo1@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

     await page.locator('//input[@type="email"]').fill("");
    
    await page.locator('[name="email"]').fill("newdemo@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForTimeout(2000);

    await expect(
      page.getByText("No Email Found", { exact: false })
    ).toBeVisible();

    await page.waitForTimeout(3000);
  });




  test("Test 5 - Valid login", async () => {

    //ait page.goto("https://app.nowdigitaleasy.com/auth/login");
      await page.getByRole("link", { name: "Change" }).click()
    await page.waitForLoadState("networkidle");

    await page.locator('[name="email"]').fill("newdemo@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

    await page.locator('[name="password"]').fill("Password@123");
    await page.getByRole("button", { name: "Log in" }).click();

    await expect(page).toHaveURL(
      "https://app.nowdigitaleasy.com/dashboard");

    console.log("Login successful!");
    await page.waitForTimeout(6000);

   
  });

});