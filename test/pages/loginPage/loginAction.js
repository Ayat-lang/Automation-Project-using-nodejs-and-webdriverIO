
const loginObjects = require("./loginObjects");

class LoginAction{

    async inputUsername(username){
        await loginObjects.userobject.setValue(username);
    }

    async inputPassword(password){
        await loginObjects.passwordobject.setValue(password);
    }

    async clickLoginButton(){
        await loginObjects.loginbutton.click();
    }

    async getErrorMessage(){
        return await loginObjects.errorMessageObejecet.getText();
    }
    
}

module.exports = new LoginAction();