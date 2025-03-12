# Automation Testing Project

Automation testing URL on the (https://www.saucedemo.com/) site.

# Project Details
Q1 Try login with locked_out_user and verify the error message, Login with standard_user. Then from the hamburger menu Reset App State. Then Add Any three items to the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out. 
Q2 Login with performance_glitch_user and Reset App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.

## Clone the project

```bash
   git clone git@github.com:Ayat-lang/Automation-Project-using-nodejs-and-webdriverIO.git
```
## install the Dependency

```bash
   npm install
```

## Run the project command 

```bash
   npm run wdio
```

## To see the screenshot run this command

```bash
   allure generate allure-results --clean; allure open
```