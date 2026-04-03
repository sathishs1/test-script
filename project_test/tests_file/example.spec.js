const { test, expect, chromium } = require("@playwright/test");

test.describe.configure({ mode: "serial" });

test.describe("Login Validations", () => {

  
  let browser;
  let context;
  let page;


  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });

    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");

    if (page.url() === "https://appdev.nowdigitaleasy.com/auth/login") {
      console.log("Successfully navigated to the login page");
    } else {
      console.log("Failed to navigate to the login page");
    } 
  });

  test.afterAll(async () => {
    await browser.close();
    console.log("Browser closed after all tests");
  });


  
  test("Test 1 - Empty email field", async () => {
    

    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");

    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    await page.screenshot({ path: "screenshot_test1.png", fullPage: true });
    console.log("📸 Check screenshot_test1.png to see the error message");

    await page.waitForTimeout(2000);
  });


  test("Test 2 - Uppercase email", async () => {

    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");
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

    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");
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

    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");
    await page.waitForLoadState("networkidle");

   
    await page.locator('[name="email"]').fill("newdemo1@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

   
    await page.locator('//input[@type="email"]').press("Control+A");
    await page.locator('//input[@type="email"]').press("Delete");

    
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

    await page.goto("https://appdev.nowdigitaleasy.com/auth/login");
    await page.waitForLoadState("networkidle");

    await page.locator('[name="email"]').fill("newdemo@gmail.com");
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000);

    await page.locator('[name="password"]').fill("Password@123");
    await page.getByRole("button", { name: "Log in" }).click();

    await expect(page).toHaveURL(
      "https://appdev.nowdigitaleasy.com/dashboard").waitForTimeout(6000);
      page.get

    console.log("Login successful!");
    await page.waitForTimeout(6000);
  });

});