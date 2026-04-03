const{test,expect,chromium} = require("@playwright/test");
const { constants } = require("node:buffer");

test('windowshandle', async ({page}) => {
    // const page1= await page.context().newPage();
    // await page1.goto("https://www.google.com/");

    // const page2= await page.context().newPage();
    //     await page2.goto("https://www.facebook.com/");
    //     await page2.getByLabel("Create new account", {exact: true }).click();

    // //   await page2.bringToFront();
    // await page1.bringToFront();
    //     await page1.close();
    //     await page2.pause();
    let context;
        //   fdasfskd
    await page.goto("https://demoqa.com/browser-windows");

   const  [newpage] =  await Promise.all([
       page. context().waitForEvent("page"),
    await page.locator('#tabButton').click()

     ]);
     await newpage.waitForLoadState();
     const text = await newpage.locator('#sampleHeading').textContent();
     console.log(text);

});