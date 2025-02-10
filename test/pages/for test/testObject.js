
class testObject{
    get selectAddCardproductName(){
        return  $('//div[@class="inventory_item_name"]');
    }

}

module.exports = new testObject();