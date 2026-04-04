const{test,expect,chromium} = require("@playwright/test");
//const { constants } = require("node:buffer");

test('windowshandle', async ({page}) => {

  // to launch two tabs in same browser
    // const page1= await page.context().newPage();
    // await page1.goto("https://www.google.com/");

    // const page2= await page.context().newPage();
    //     await page2.goto("https://www.facebook.com/");
    //     await page2.getByLabel("Create new account", {exact: true }).click();

    //   await page2.bringToFront();
    // await page1.bringToFront();
    //     await page1.close();
    //     await page2.pause();

    //to handle child window

//     let context;
        
//     await page.goto("https://demoqa.com/browser-windows");

//    const  [newpage] =  await Promise.all([
//        page. context().waitForEvent("page"),
//     await page.locator('#tabButton').click()

//      ]);
//      await newpage.waitForLoadState();
//      const text = await newpage.locator('#sampleHeading').textContent();
//      console.log(text);

       // to get all the user from the table
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.click('//span[text()="Admin"]');
  await page.waitForSelector('//div[@role="row"]');

  const rows = page.locator('//div[@role="row"]');

  const count = await rows.count();
  //console.log("total user count",count);

 const user=[];

   for(let i=1; i< await count; i++){
    const  test1 = await rows.nth(i);
    const  name = await  test1.locator("xpath=.//div[text()='Employee Name']/following-sibling::div").innerText();
    const  username = await  test1.locator("xpath=.//div[text()='Username']/following-sibling::div").innerText();
    const  role = await  test1.locator("xpath=.//div[text()='User Role']/following-sibling::div").innerText();
    const  status = await  test1.locator("xpath=.//div[text()='Status']/following-sibling::div").innerText();
    user.push({
      name,
      username,
      role,
      status
    });
     
    
  
  }
  
    console.log(user);
    console.log("total user count",user.length);

});