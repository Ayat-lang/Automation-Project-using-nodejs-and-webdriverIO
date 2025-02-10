
const loginAction = require("../pages/loginPage/loginAction")

const password = "secret_sauce";
const username_w = "locked_out_user";
const correctMessage = "Epic sadface: Sorry, this user has been locked out.";


describe("Swags Lab Login funcitionality check", ()=>{
    it("validat the error message", async ()=>{
            await loginAction.inputUsername(username_w);
            await loginAction.inputPassword(password);
            await loginAction.clickLoginButton();
            const errorMessage = await loginAction.getErrorMessage();
            expect(correctMessage).toEqual(errorMessage);
            await browser.pause(10000);
    })
})
