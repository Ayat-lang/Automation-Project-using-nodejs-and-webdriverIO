
const finalcheckProductListObeject = require("./FinalCheckProductListObject");

class finalckeckProductListAction{

    async getFianlEqualProductName(number){
        return await finalcheckProductListObeject.finalProductNameObject(number).getText();
    }

    async getTotalPriceFromWebsite(){
        return await finalcheckProductListObeject.finaltotalProductPriceObject.getText();
    }

}

module.exports = new finalckeckProductListAction();