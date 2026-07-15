/** 
 * Test Case: User Logout Functionality
 * Tags: @master @regression
 * Steps:
 * 1. Navigate to the application URL.
 * 2. Click on "My Account" and then "Login".
 * 3. Enter valid login credentials and submit the form.
 * 4. verify the 'My Account' page is displayed.
 * 5. Click on Logout link to log out the user.
 * 6. click on continue button to logout
 * 7. Verify that the user is redirected to the home page 
 */

import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { MyAccountPage } from '../pages/MyAccountPage'
import { LogoutPage } from '../pages/LogoutPage'

// Declared shared variables
let config: TestConfig
let homePage: HomePage
let loginPage: LoginPage
let myAccountPage: MyAccountPage
let logoutPage: LogoutPage

// Setup berfore each step
test.beforeEach(async ({ page }) => {

    config = new TestConfig() //load test config
    await page.goto(config.appUrl)  //Navigate to URL

    // Initialize page objects
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)
    logoutPage = new LogoutPage(page)
})

// after each optional
test.afterEach(async ({ page }) => {
    await page.close() // close the browser tab
})

test('User logout test @master @regression', async () => {
    // step 2: navigate to the Login Page
    await homePage.clickMyAccount()
    await homePage.clickLogin()

    // step 3: Perform login with valid credentials
    await loginPage.login(config.email, config.password)

    // step 4: Verify succesfull login
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy()

    // step 5: Click Logout we just return to the logout page after click on Logout 
    logoutPage = await myAccountPage.clickLogout()

    // step 6: Verify "Continue" button is visible before clicking
    expect(await logoutPage.isContinueButtonVisible()).toBe(true)

    // step 7: Click Conitnue and verify redirecting to HomePage
    homePage = await logoutPage.clickContinue()
    expect(await homePage.isHomePageExists()).toBe(true)
})
