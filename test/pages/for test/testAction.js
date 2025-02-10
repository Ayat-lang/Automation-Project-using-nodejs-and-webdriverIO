

const testObject = require("./testObject");

class testAction{
    async addTOCardProductName(){
       return await testObject.selectAddCardproductName.getText();
       browser.pause(2000);
    }

}

module.exports = new testAction();