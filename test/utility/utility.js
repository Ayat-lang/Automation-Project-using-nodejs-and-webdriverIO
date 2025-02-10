
class Utility{

    textToNumber(text){
        //Item total: $47.97 --From Website
        return parseFloat(text.replace(/[$,Iteam toal: ]/g,""))
    }

    randomProductNumber(){
        return Math.floor(Math.random() * 6) + 1;
    }

}

module.exports = new Utility();