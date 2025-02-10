

const filterObject = require("./FilterObject");

class filterAction{

    async filterSelection(){
        await filterObject.FilterObjectSelection.selectByAttribute('value', 'za');
    }
}

module.exports = new filterAction();