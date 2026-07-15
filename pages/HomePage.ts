import { Page, Locator } from '@playwright/test'

export class HomePage {

    // locators
    private readonly page: Page
    private readonly linkMyAccount: Locator
    private readonly linkRegister: Locator
    private readonly linkLogin: Locator
    private readonly textSerachBox: Locator
    private readonly btnSearch: Locator


    // constructor

    constructor(page: Page) {

        this.page = page
        this.linkMyAccount = this.page.locator("span:has-text('My Account')")
        this.linkRegister = this.page.locator(".dropdown-menu li a:has-text('Register')")
        this.linkLogin = this.page.locator(".dropdown-menu li a:has-text('Login')")
        this.textSerachBox = this.page.locator('[name="search"]')
        this.btnSearch = this.page.locator('#search button[type="button"]')
    }

    // actions 
    async isHomePageExists() {
        let title: string = await this.page.title()
        if (title) {
            return true
        }
        return false
    }

    // click on My Account link
    async clickMyAccount() {
        try {
            await this.linkMyAccount.click()
        } catch (error) {
            console.log("Error while clicking on My Account link: " + error)
            throw error
        }
    }
    // click on Register link
    async clickRegister() {
        try {
            await this.linkRegister.click()
        } catch (error) {
            console.log("Error while clicking on Register link: " + error)
            throw error
        }
    }
    // click on Login link
    async clickLogin() {
        try {
            await this.linkLogin.click()
        } catch (error) {
            console.log("Error while clicking on Login link: " + error)
            throw error
        }
    }

    // enter product name in search box
    async enterProductName(productName: string) {
        try {
            await this.textSerachBox.fill(productName)
        } catch (error) {
            console.log("Error while entering product name in search box: " + error)
            throw error
        }
    }
    // click on search button
    async clickSearchButton() {
        try {
            await this.btnSearch.click()
        } catch (error) {
            console.log("Error while clicking on search button: " + error)
            throw error
        }
    }
}