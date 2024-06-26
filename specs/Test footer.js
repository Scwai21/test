describe('Footer:', () => {
    it('Footer links X', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const twitter = await $('[href="https://twitter.com/saucelabs"]')
        await twitter.click()

        await browser.pause(4000)
        await browser.switchWindow('X')
        const url = await browser.getUrl()
        expect(url).toBe('https://x.com/saucelabs')
        await browser.closeWindow()
        await browser.switchWindow('Swag Labs')
    })

    it('Footer links Facebook', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const facebook = await $('[href="https://www.facebook.com/saucelabs"]')
        await facebook.click()

        await browser.pause(4000)
        await browser.switchWindow('Facebook')
        const url = await browser.getUrl()
        expect(url).toBe('https://www.facebook.com/saucelabs')
        await browser.closeWindow()
        await browser.switchWindow('Swag Labs')
    })

    it('Footer links LinkedIn', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const linkedIn = await $('[href="https://www.linkedin.com/company/sauce-labs/"]')
        await linkedIn.click()

        await browser.pause(4000)
        await browser.switchWindow('LinkedIn')
        const url = await browser.getUrl()
        expect(url).toBe('https://www.linkedin.com/company/sauce-labs/')
    })
})
