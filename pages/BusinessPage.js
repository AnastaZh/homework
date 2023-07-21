const { By, until } = require("selenium-webdriver");
const assert = require("assert");

const config = require('../config');

class BusinessPage {
    constructor(driver) {
        this.driver = driver;
    }

    async checkOpeningBusinessPage() {
        await this.driver.wait(until.urlContains(config.businessUrl), 5000);
        const currentUrl = await this.driver.getCurrentUrl();
        console.log('Current url:', currentUrl)
        console.log('Expected url:', config.businessUrl)
        assert.strictEqual(currentUrl, config.businessUrl);
    }
}

module.exports = BusinessPage;