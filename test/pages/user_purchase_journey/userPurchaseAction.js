
const userPurchaseObject = require("./userPurschaeObjects");

class UserPurchaseAction{

    async clickHumbermenuBar(){
        await userPurchaseObject.hamburgerMenuObject.click();
        await browser.pause(2000);
    }

    async clickResetButton(){
        await userPurchaseObject.resetAppButtonObject.click();
        await browser.pause(2000);
    }

    async clickHumbermenuClose(){
        await userPurchaseObject.hamburgerCloseObject.click();
        await browser.pause(2000);
    }

    async clickAddToCartButton(number){
        await userPurchaseObject.selectAddToCardbutton(number).click();
        await browser.pause(2000);
    }

    async clickShoppingCartButton(){
        await userPurchaseObject.selectShoppingCartbutton.click();
        await browser.pause(1000);
    }

    async clickcheckoutButton(){
        await userPurchaseObject.checkoutCartbutton.click();
        await browser.pause(2000);
    }

    async getProductName(number){
        return await userPurchaseObject.getProductNameObject(number).getText();
    }

    async getProductPrice(number){
        return await userPurchaseObject.getProductPriceObject(number).getText();
    }

    async ClickFinishedButton(){
        return await userPurchaseObject.finishButtonObject.click();
    }

    async ClickLogOutButton(){
        return await userPurchaseObject.userLogoutButton.click();
    }
}

module.exports = new UserPurchaseAction();