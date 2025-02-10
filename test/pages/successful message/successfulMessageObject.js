
class SuccessfulMessageObject{

    get thankyouObject(){
        return $('//h2[@data-test="complete-header"]');
    }

    get thankyoutextObject(){
        return $('//div[@data-test="complete-text"]');
    }

}

module.exports = new SuccessfulMessageObject();