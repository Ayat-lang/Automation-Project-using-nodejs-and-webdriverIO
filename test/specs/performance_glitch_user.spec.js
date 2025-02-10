const loginAction = require("../pages/loginPage/loginAction");
const userPurchaseAction = require("../pages/user_purchase_journey/userPurchaseAction");
const userInformation = require("../pages/userInformationPage/userInformationAction");
const finalProductEqualName = require("../pages/FinalCheckProductNameAndPrice/finalCheckProductListAction");
const finalCheckProductListAction = require("../pages/FinalCheckProductNameAndPrice/finalCheckProductListAction");
const Utility = require('../utility/utility')
const filterOption = require("../pages/Filter/FilterAction")
const successfulMessageAction = require("../pages/successful message/successfullMessageAction");



const password = "secret_sauce";
const username = "performance_glitch_user";

//userinformation
const userFirstName = "Ahammed";
const userLastName = "Khan";
const userZipCode = "4212";

var productNameFromWeb;
var productPriceFromWeb;


describe("performance_glitch_user journey varify", async()=>{
    it("successfully login", async ()=>{
        await loginAction.inputUsername(username);
        await loginAction.inputPassword(password);
        await loginAction.clickLoginButton();
        await browser.pause(2000);
    })

    it("Verify the filter Z-A", async ()=>{
        await userPurchaseAction.clickHumbermenuBar();
        await userPurchaseAction.clickResetButton();
        await userPurchaseAction.clickHumbermenuClose();
        await browser.pause(1000);
        await filterOption.filterSelection();  //filter Selection
        await browser.pause(2000);
    })

    it("Product add to the add to cart", async()=>{
        await userPurchaseAction.clickAddToCartButton("1");
        productNameFromWeb = await userPurchaseAction.getProductName("1");   //product Name from the web
        console.log("test == " + productNameFromWeb);
        productPriceFromWeb = await userPurchaseAction.getProductPrice("1"); //Product Price from the web
        await userPurchaseAction.clickShoppingCartButton();
        await browser.pause(2000);
        await userPurchaseAction.clickcheckoutButton();
        await userInformation.inputFirstName(userFirstName);
        await userInformation.inputLastName(userLastName);
        await userInformation.inputZipCode(userZipCode);
        await userInformation.clickContinueButton();
    })

    it("Verify the product Name in the add to cart page", async()=>{
        
        const productElement = await $('//div[@class="inventory_item_name"]'); 
        const finalProductEqualName = await productElement.getText();
        console.log("productNameFromWeb = " + productNameFromWeb);
        console.log("finalProductName = "+ finalProductEqualName);
        expect(productNameFromWeb).toEqual(finalProductEqualName);
    })
    it("Verify the product Price in the add to card page", async ()=>{
            const price = Utility.textToNumber(productPriceFromWeb);
            const totalPriceFromWebsite = await finalCheckProductListAction.getTotalPriceFromWebsite();
            const totalPriceFromWebsiteInt = Utility.textToNumber(totalPriceFromWebsite);
            expect(price).toEqual(totalPriceFromWebsiteInt);
            await browser.pause(2000);
            await userPurchaseAction.ClickFinishedButton();
    })
    it("verify the successful order message", async ()=>{
            
        const validTextHeader = "Thank you for your order!";
        const validText = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    
        const validTextHeaderFromWeb = await successfulMessageAction.getThankYouMessage();
        const validTextFromWeb = await successfulMessageAction.getThankText();
    
        expect(validTextHeader).toEqual(validTextHeaderFromWeb);
        expect(validText).toEqual(validTextFromWeb)
        await browser.pause(3000);
    
        await userPurchaseAction.clickHumbermenuBar();
        await userPurchaseAction.clickResetButton();
        await userPurchaseAction.ClickLogOutButton();
        await browser.pause(3000);
        })
})