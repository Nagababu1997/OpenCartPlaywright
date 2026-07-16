# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [active] [ref=e37]: MacBook
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  29  | // This is the main test block that runs the entire flow
  30  | test('execute end-to-end test flow @end-to-end', async({page})=>{
  31  |     // Navigate to the application
  32  |     const config = new TestConfig()
  33  |     await page.goto(config.appUrl)
  34  |     
  35  |     // Step 1: Register to the application's home page
  36  |     let registeredEmail:string = await performRegistration(page)
  37  |     console.log("Registration is completed!")
  38  | 
  39  |     // step 2: Logout after successful registrstion
  40  |     await performLogout(page)
  41  |     console.log("Logout is completed!")
  42  | 
  43  |     // step 3: Login with the registered user account
  44  |     await performLogin(page,registeredEmail)
  45  |     console.log("Login is completed!")
  46  | 
  47  |     // step 4: Search for s product and add it to the cart
  48  |     await addProductToCart(page)
  49  |     console.log("Product added to cart!")
  50  | 
  51  |     // step 5: Verify the contents of the shopping cart
  52  |     await verifyShoppingCart(page)
  53  |     console.log("Shopping cart verification completed!")
  54  |     
  55  | })
  56  | 
  57  | // Function to register a new user account
  58  | async function performRegistration(page:Page): Promise<string> {
  59  |     const homepage = new HomePage(page)
  60  |     await homepage.clickMyAccount() //click 'My Account' link
  61  |     await homepage.clickRegister()  //click 'Register' option
  62  | 
  63  |     const registrationPage = new RegistrationPage(page)
  64  |     await registrationPage.setFirstName(RandomDataUtil.getFirstName())
  65  |     await registrationPage.setLastName(RandomDataUtil.getlastName())
  66  |     
  67  |     // get email and store to login
  68  |     let email:string = RandomDataUtil.getEmail()
  69  |     await registrationPage.setEmail(email)
  70  |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber())
  71  | 
  72  |     await registrationPage.setPassword("test@123")
  73  |     await registrationPage.setConfirmPassword("test@123") // password can not return in second time like email
  74  | 
  75  |     await registrationPage.setPrivacyPolicy()
  76  |     await registrationPage.clickContinue()
  77  | 
  78  |     // Validate that the registration was succesfull
  79  |     const confirmMsg = await registrationPage.getConfirmationMsg()
  80  |     expect(confirmMsg).toContain('Your Account Has Been Created!')
  81  | 
  82  |     return email // return the email for login purpose
  83  | }
  84  | 
  85  | //  Function to log out the current user
  86  | async function performLogout(page:Page) {
  87  |     const myAccountPage = new MyAccountPage(page)
  88  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout()
  89  | 
  90  |     // Ensure the continue button was visible
  91  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true)
  92  | 
  93  |     // Click 'Continue' and verify redirection to HomePage
  94  |     const homePage:HomePage = await logoutPage.clickContinue()
  95  |     expect(await homePage.isHomePageExists()).toBe(true)
  96  | }
  97  | 
  98  | // Function to log in using the regitsred email
  99  | async function performLogin(page:Page, email:string) {
  100 | const config  = new TestConfig()
  101 | await page.goto(config.appUrl)
  102 | 
  103 | const homePage = new HomePage(page)
  104 | await homePage.clickMyAccount()
  105 | await homePage.clickLogin()
  106 | 
  107 | const loginPage = new LoginPage(page)
  108 | await loginPage.login(email,"test@123")
  109 | 
  110 | // Verify the login by cheking My Account Page
  111 | const myAccountPage = new MyAccountPage(page)
  112 | expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy()
  113 |     
  114 | }
  115 | 
  116 | // Function to search for a product and added it to the cart
  117 | async function addProductToCart(page:Page) {
  118 |     const homePage  = new HomePage(page)
  119 |     const config = new TestConfig()
  120 | 
  121 |     const productName:string = config.productName
  122 |     const productQuantity:string = config.productQuantity
  123 | 
  124 |     await homePage.enterProductName(productName)
  125 |     // await homePage.clickSearchButton()
  126 | 
  127 |     // Validate search result page
  128 |     const searchResultsPage = new SearchResultsPage(page)
> 129 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy()
      |                                                                 ^ Error: expect(received).toBeTruthy()
  130 | 
  131 |     // Validate that desired product is exists in search result
  132 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy()
  133 |     // Add product to the cart
  134 |     await searchResultsPage.selectProduct(productName)
  135 | 
  136 | 
  137 |     // select product and set quantity
  138 |     const productPage = new ProductPage(page)
  139 |     await productPage?.setQuantity(productQuantity)
  140 |     await productPage?.addToCart() // Add product to shopping cart
  141 | 
  142 |     await page.waitForTimeout(3000) // wait for simulated delay
  143 | 
  144 |     // confirm product was added
  145 |     expect(await productPage?. isConfirmationMessageVisible()).toBe(true)
  146 | 
  147 | }
  148 | 
  149 | // Function to verify the shopping cart details
  150 | async function verifyShoppingCart(page:Page){
  151 |     const productpage = new ProductPage(page)
  152 | 
  153 |     // Navigate to shopping cart from product page
  154 |     await productpage.clickItemsToNavigateToCart()
  155 |     const shoppingCartPage: ShoppingCartPage = await productpage.clickViewCart()
  156 | 
  157 |     console.log("Navigate to shopping cart!")
  158 | 
  159 |     const config = new TestConfig()
  160 | 
  161 |     // Validate that total price is correct (based on config)
  162 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice)
  163 | }
```