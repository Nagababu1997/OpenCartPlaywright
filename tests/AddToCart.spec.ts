/** 
 * Title: Add to cart
 * Tags: @master @regression
 * Steps:
 * 1. Navigate to the applications
 * 2. Enter Product Name in the search field
 * 3. Click the search button
 * 4. Verify the product is displayed in the search results
 * 5. Select the Product
 * 6. Add the product to the cart
 * 7. Verify the success message
 */

import {test, expect} from '@playwright/test'
import{HomePage} from '../pages/HomePage'
import{SearchResultsPage} from '../pages/SearchResultsPage'
import{TestConfig} from '../test.config'
import{ProductPage} from '../pages/ProductPage'

// Declare reusable variables 
let config: TestConfig
let serachResultsPage: SearchResultsPage
let homePage : HomePage
let productPage : ProductPage

// Playwright hook- run before each test
test.beforeEach(async({page})=>{
    config = new TestConfig()
    await page.goto(config.appUrl)

    // Intialize page objects
    serachResultsPage = new SearchResultsPage(page)
    homePage = new HomePage(page)
    productPage = new ProductPage(page)

})

// Playwright hook- after each to close browser optional
test.afterEach(async({page})=>{
    await page.close()
})

test('Add product to the cart test  @master @regression', async()=>{
     const productName = config.productName
    // step 2 & 3: Enter Product name in to the search field and click search
    await homePage.enterProductName(productName)
    await homePage.clickSearchButton()

    // step 4: Verify the search result will be displayed
    expect(await  serachResultsPage.isSearchResultsPageExists()).toBeTruthy()
    // step 5: Validate if the search product is apperas in result
   const isProductFound =  await serachResultsPage.isProductExist(productName)
   expect(isProductFound).toBeTruthy()
   //  step 6-7-8:Select Product ->Set quantity ->Add to cart ->Verify confirmation
   if(await serachResultsPage.isProductExist(productName))
    {
        await serachResultsPage.selectProduct(productName)
        await productPage.setQuantity(config.productQuantity)  // set quantity
        await productPage.addToCart()

        // step 8: Assert success messgae is visible
        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy()
    } 
})
