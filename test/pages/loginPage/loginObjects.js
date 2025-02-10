
class LoginObjects{

    get userobject(){
        return $('//input[@id="user-name"]');
    }

    get passwordobject(){
        return $('//input[@id="password"]');
    }

    get loginbutton(){
        return $('//input[@id="login-button"]');
    }

    get errorMessageObejecet(){
        return $('//h3[@data-test="error"]');
    }

}

module.exports = new LoginObjects();