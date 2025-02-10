
class UserInformationObject{

    get firstNameObject(){
        return $('//input[@id="first-name"]');
    }
    
    get lastNameObject(){
        return $('//input[@id="last-name"]');
    }

    get zipCodeObject(){
        return $('//input[@id="postal-code"]');
    }

    get continueButtonObject(){
        return $('//input[@id="continue"]');
    }

}

module.exports = new UserInformationObject();