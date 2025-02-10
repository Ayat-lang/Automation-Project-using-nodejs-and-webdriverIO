const loginAction = require("../pages/loginPage/loginAction")
const userPurchaseAction = require("../pages/user_purchase_journey/userPurchaseAction");
const userInformation = require("../pages/userInformationPage/userInformationAction");
const finalProductEqualName = require("../pages/FinalCheckProductNameAndPrice/finalCheckProductListAction");
const Utility = require("../utility/utility");
const finalCheckProductListAction = require("../pages/FinalCheckProductNameAndPrice/finalCheckProductListAction");
const utility = require("../utility/utility");
const successfulMessageAction = require("../pages/successful message/successfullMessageAction");


const password = "secret_sauce";
const username = "standard_user";
const number = [];

const userFirstName = "Ahammed";
const userLastName = "Khan";
const userZipCode = "4212";

const productNameBeforeAddtocard = [];
const productNameBeforePayment = [];
const productPricList = [];
var totalPriceCalculation = 0;


describe("Product Purchase Journey", ()=>{
    it("successfully login", async ()=>{
            await loginAction.inputUsername(username);
            await loginAction.inputPassword(password);
            await loginAction.clickLoginButton();
            await browser.pause(3000);
    })

    it("Product add to the add to cart", async ()=>{
        await userPurchaseAction.clickHumbermenuBar();
        await userPurchaseAction.clickResetButton();
        await userPurchaseAction.clickHumbermenuClose();

        //Ramdomly Product selection
        for( var i = 1; i < 4; i++){
            let num = utility.randomProductNumber();
            number.push(String(num));
        }
        browser.pause(2000);

        //add to the card 
        for( var i = 0; i < 3; i++){
            await userPurchaseAction.clickAddToCartButton(number[i]);
            const productName = await userPurchaseAction.getProductName(number[i]);
            productNameBeforeAddtocard.push(productName);
            const productPrice = await userPurchaseAction.getProductPrice(number[i]);
            productPricList.push(productPrice);
        }
        await userPurchaseAction.clickShoppingCartButton();
        await browser.pause(3000);
        await userPurchaseAction.clickcheckoutButton();
        await userInformation.inputFirstName(userFirstName);
        await userInformation.inputLastName(userLastName);
        await userInformation.inputZipCode(userZipCode);
        await userInformation.clickContinueButton();
    })

    it("verify all the product's name At the add to card Page", async ()=>{
        for( var i = 1; i < 4; i++){
            const finalProductName = await finalProductEqualName.getFianlEqualProductName(String(i));
            productNameBeforePayment.push(finalProductEqualName);
        }

        for( var i = 0; i < 3; i++)
            expect(productNameBeforeAddtocard[i]).toEqual(productNameBeforeAddtocard[i]);
    })

    it("verify total product Price", async ()=>{

       for ( var i = 0; i < 3; i++){
          const price = Utility.textToNumber(productPricList[i]);
          totalPriceCalculation = totalPriceCalculation + price;
       }

       const totalPriceFromWebsite = await finalCheckProductListAction.getTotalPriceFromWebsite();
       const totalPriceFromWebsiteInt = utility.textToNumber(totalPriceFromWebsite);
       //console.log(totalPriceFromWebsiteInt);
       expect(totalPriceFromWebsiteInt).toEqual(totalPriceCalculation);
       await browser.pause(3000);
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