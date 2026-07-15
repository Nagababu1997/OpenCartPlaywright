/* 
Test Case: Account Registration
Tags: @master @sanity @regression
steps:
1. Navigate to the application URL
2. Go to "My Account" and click on the "Register" link
3. Fill in the registration form with valid details
4. Agree to the terms and conditions checkbox
5. Click on the "Continue" button to submit the form
6. Verify that the account is created successfully and the user is redirected to the success page

*/

import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator' 
import { TestConfig } from '../test.config'

let homePage: HomePage
let registrationPage: RegistrationPage

test.beforeEach(async ({ page }) => {
    // Navigate to the application URL
    const config = new TestConfig()
    await page.goto(config.appUrl)
    homePage = new HomePage(page)
    registrationPage = new RegistrationPage(page)

})
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000) // Wait for 3 seconds before closing the browser
    await page.close()
})

test('User Registration Test @master @sanity @regression', async () => {


    // Go to "My Account" and click on the "Register" link
    await homePage.clickMyAccount()
    await homePage.clickRegister()

    // Fill in the registration form with valid details
    await registrationPage.setFirstName(RandomDataUtil.getFirstName())
    await registrationPage.setLastName(RandomDataUtil.getlastName())
    await registrationPage.setEmail(RandomDataUtil.getEmail())
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber())
    const password = RandomDataUtil.getPassword()
    await registrationPage.setPassword(password)
    await registrationPage.setConfirmPassword(password)
    await registrationPage.setPrivacyPolicy()
    await registrationPage.clickContinue()
    // Verify that the account is created successfully and the user is redirected to the success page
    const confirmationMsg = await registrationPage.getConfirmationMsg()
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


})