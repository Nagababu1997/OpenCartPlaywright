/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 * 
 * Purpose:
 * This test simulates a complete user flow on e-commerce site
 * 
 * steps:
 * 1. Register a new account
 * 2. Logout after registration
 * 3. Login with the same account
 * 4. search for a product and add it to the shopping cart
 * 5. Verify cart contents
 * 6. Attempt checkout(disable since feature isn't available on demo site)
 * 
 */
import{test,expect,Page} from '@playwright/test'
import{RegistrationPage} from '../pages/RegistrationPage'
import{HomePage}from '../pages/HomePage'
import{RandomDataUtil}from '../utils/randomDataGenerator'
import{TestConfig}from '../test.config'
import{LogoutPage}from '../pages/LogoutPage'
import{LoginPage}from '../pages/LoginPage'
import{MyAccountPage}from '../pages/MyAccountPage'
import{SearchResultsPage}from '../pages/SearchResultsPage'
import{ProductPage}from '../pages/ProductPage'
import{ShoppingCartPage}from '../pages/ShoppingCartPage'
import{CheckoutPage}from '../pages/CheckoutPage'

// This is the main test block that runs the entire flow
test('execute end-to-end test flow @end-to-end', async({page})=>{
    // Navigate to the application
    const config = new TestConfig()
    await page.goto(config.appUrl)
    
    // Step 1: Register to the application's home page
    let registeredEmail:string = await performRegistration(page)
    console.log("Registration is completed!")

    // step 2: Logout after successful registrstion
    await performLogout(page)
    console.log("Logout is completed!")

    // step 3: Login with the registered user account
    await performLogin(page,registeredEmail)
    console.log("Login is completed!")

    // step 4: Search for s product and add it to the cart
    await addProductToCart(page)
    console.log("Product added to cart!")

    // step 5: Verify the contents of the shopping cart
    await verifyShoppingCart(page)
    console.log("Shopping cart verification completed!")
    
})

// Function to register a new user account
async function performRegistration(page:Page): Promise<string> {
    const homepage = new HomePage(page)
    await homepage.clickMyAccount() //click 'My Account' link
    await homepage.clickRegister()  //click 'Register' option

    const registrationPage = new RegistrationPage(page)
    await registrationPage.setFirstName(RandomDataUtil.getFirstName())
    await registrationPage.setLastName(RandomDataUtil.getlastName())
    
    // get email and store to login
    let email:string = RandomDataUtil.getEmail()
    await registrationPage.setEmail(email)
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber())

    await registrationPage.setPassword("test@123")
    await registrationPage.setConfirmPassword("test@123") // password can not return in second time like email

    await registrationPage.setPrivacyPolicy()
    await registrationPage.clickContinue()

    // Validate that the registration was succesfull
    const confirmMsg = await registrationPage.getConfirmationMsg()
    expect(confirmMsg).toContain('Your Account Has Been Created!')

    return email // return the email for login purpose
}

//  Function to log out the current user
async function performLogout(page:Page) {
    const myAccountPage = new MyAccountPage(page)
    const logoutPage: LogoutPage = await myAccountPage.clickLogout()

    // Ensure the continue button was visible
    expect(await logoutPage.isContinueButtonVisible()).toBe(true)

    // Click 'Continue' and verify redirection to HomePage
    const homePage:HomePage = await logoutPage.clickContinue()
    expect(await homePage.isHomePageExists()).toBe(true)
}

// Function to log in using the regitsred email
async function performLogin(page:Page, email:string) {
const config  = new TestConfig()
await page.goto(config.appUrl)

const homePage = new HomePage(page)
await homePage.clickMyAccount()
await homePage.clickLogin()

const loginPage = new LoginPage(page)
await loginPage.login(email,"test@123")

// Verify the login by cheking My Account Page
const myAccountPage = new MyAccountPage(page)
expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy()
    
}

// Function to search for a product and added it to the cart
async function addProductToCart(page:Page) {
    const homePage  = new HomePage(page)
    const config = new TestConfig()

    const productName:string = config.productName
    const productQuantity:string = config.productQuantity

    await homePage.enterProductName(productName)
    await homePage.clickSearchButton()

    // Validate search result page
    const searchResultsPage = new SearchResultsPage(page)
    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy()

    // Validate that desired product is exists in search result
    expect(await searchResultsPage.isProductExist(productName)).toBeTruthy()
    // Add product to the cart
    await searchResultsPage.selectProduct(productName)


    // select product and set quantity
    const productPage = new ProductPage(page)
    await productPage?.setQuantity(productQuantity)
    await productPage?.addToCart() // Add product to shopping cart

    await page.waitForTimeout(3000) // wait for simulated delay

    // confirm product was added
    expect(await productPage?. isConfirmationMessageVisible()).toBe(true)

}

// Function to verify the shopping cart details
async function verifyShoppingCart(page:Page){
    const productpage = new ProductPage(page)

    // Navigate to shopping cart from product page
    await productpage.clickItemsToNavigateToCart()
    const shoppingCartPage: ShoppingCartPage = await productpage.clickViewCart()

    console.log("Navigate to shopping cart!")

    const config = new TestConfig()

    // Validate that total price is correct (based on config)
    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice)
}