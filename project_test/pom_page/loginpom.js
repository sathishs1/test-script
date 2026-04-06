class login{
    constructor(page){
        this.page=page;
           this.username= page.getByPlaceholder("Email address or mobile number");
           this.nextbtn= page.getByRole("button", { name: "Next" });
           this.pass= page.getByPlaceholder("Enter password");
           this.signin= page.getByRole("button", { name: "Sign in", exact: true });
           this.checkbox = page.locator("//span[@id='lyte-checkbox-label-189']");
           this.more = page.getByRole("button", { name: "More" });
           this.export = page.getByLabel("Export");
           this.exportoption = page.locator("(//span[@class = 'field-icon-wrap cP'])[7]");
           this.choosefields = page.getByRole("button", { name: "Choose fields" });
           this.createdtime = page.getByLabel("Created Time");
           this.modifiedtime = page.getByLabel("Modified Time");

    }   
        
    async goto(){
        await this.page.goto("https://accounts.zoho.in/signin?servicename=ZohoBigin&signupurl=https://www.bigin.com/signup.html");
    }
    async entername(username){
        await this.username.fill(username);
        await this.nextbtn.click();
    }
    async enterpass(password){  
        await this.pass.fill(password);
        await this.signin.click();
    }
    async contactmodule(){
        await this.page.waitForLoadState("networkidle");
        await this.page.locator("(//span[text()='Contacts'])[2]").click();
    }

    async checkboxbulk(){
        await this.checkbox.click();
        await this.more.click();    
        await this.export.click();

    }

    async exportoptionselect(){
        await this.exportoption.click();
        await this.choosefields.click();
    }
    async fieldselection(){
        await this.createdtime.click();
        await this.modifiedtime.click();
    }
}
module.exports = { login };