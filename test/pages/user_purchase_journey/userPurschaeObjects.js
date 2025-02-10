
class UserPurchaseObjects{

    get hamburgerMenuObject(){
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get resetAppButtonObject(){
        return $('//a[@id="reset_sidebar_link"]');
    }

    get hamburgerCloseObject(){
        return $('//button[@id="react-burger-cross-btn"]');
    }

    selectAddToCardbutton(number){
        return $(`//div[@class="inventory_item"][${number}]/child::div[2]/div[2]/button`);
    }

    get selectShoppingCartbutton(){
        return $('//a[@data-test="shopping-cart-link"]');
    }

    get checkoutCartbutton(){
        return $('//button[@id="checkout"]');
    }

    getProductNameObject(number){
        return $(`//div[@class="inventory_item"][${number}]/child::div[2]/div[1]/a/div`);
    }

    getProductPriceObject(number){
        return $(`((//div[@class="inventory_item"])[${number}])/child::div[2]/div[2]/div`);
    }

    get finishButtonObject(){
        return $('//button[@id="finish"]');
    }

    get userLogoutButton(){
        return $('//a[@id="logout_sidebar_link"]');
    }

}

module.exports = new UserPurchaseObjects();