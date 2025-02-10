
const userInformationObject = require("./userInformationObject");

class UserInformationAction{
    async inputFirstName(firstName){
        await userInformationObject.firstNameObject.setValue(firstName);
    }

    async inputLastName(lastName){
        await userInformationObject.lastNameObject.setValue(lastName);
    }

    async inputZipCode(zipcode){
        await userInformationObject.zipCodeObject.setValue(zipcode);
        await browser.pause(2000);
    }

    async clickContinueButton(){
        await userInformationObject.continueButtonObject.click();
        await browser.pause(3000);
    }

}

module.exports = new UserInformationAction();