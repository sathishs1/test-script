const { test, expect, chromium } = require("@playwright/test");
const {login} = require("../pom_page/loginpom.js");
test('logintest1', async ({page}) => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    const login1 = new login(page); 
 await login1.goto();
 await login1.entername("akshatkanu9@gmail.com");
 //await login1.nextbtn.click();  
 await login1.pass.fill("ONEindia_123")  
 try {
 await login1.signin.click();

 await login1.contactmodule({ timeout: 50000 });
 await page.waitForLoadState("networkidle");
 if( page.url().includes("contacts/list")){
    console.log("Login successful and navigated to contacts module");  
    
 }
}
 catch (error){
    console.log("Login failed or did not navigate to contacts module");
    await page.close(); 
 }


 await expect(page).toHaveTitle("All Contacts",{exact : true}); 
 console.log("Title assertion passed: Navigated to the correct page with title 'All Contacts'");  
await login1.contactmodule();

await login1.checkboxbulk();
await login1.exportoptionselect();
await login1.fieldselection();

await login1.createdtime.dragTo(login1.modifiedtime);

 //await page.pause();

    
    
});
