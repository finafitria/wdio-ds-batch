


describe('Test Sauce Demo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTexrbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwordTexrbox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect (browser).toHaveTitle('Swag Labs')
    });
});