

class finalcheckProductList{
    finalProductNameObject(number){
        return $(`//div[@class="cart_item"][${number}]/child::div[2]/a/div`)
    }

    get finaltotalProductPriceObject(){
        return $('//div[@data-test="subtotal-label"]');
    }

}

module.exports = new finalcheckProductList();