const { By, until } = require("selenium-webdriver");
const assert = require("assert");

const config = require('../config');

class PersonalPage {
    constructor(driver) {
        this.driver = driver;
    }

    async checkOpeningPersonalPage() {
        await this.driver.wait(until.urlContains(config.personalUrl), 5000);
        const currentUrl = await this.driver.getCurrentUrl();
        console.log('Current url:', currentUrl)
        console.log('Expected url:', config.personalUrl)
        assert.strictEqual(currentUrl, config.personalUrl);
    }
}

module.exports = PersonalPage;