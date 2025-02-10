
const SuccessfulMessageObject = require("./successfulMessageObject")

class successfullMessageAction{

    async getThankYouMessage(){
        return await SuccessfulMessageObject.thankyouObject.getText();
    }

    async getThankText(){
        return await SuccessfulMessageObject.thankyoutextObject.getText();
    }
}

module.exports = new successfullMessageAction();