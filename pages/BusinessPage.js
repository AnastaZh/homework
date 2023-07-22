const { until } = require("selenium-webdriver");
const assert = require("assert");

const config = require("../config");

class BusinessPage {
    constructor(driver) {
        this.driver = driver;
    }

    async checkOpeningBusinessPage() {
        await this.driver.wait(until.urlContains(config.businessPage.businessUrl), 5000);
        const currentUrl = await this.driver.getCurrentUrl();
        console.log("Current url:", currentUrl);
        console.log("Expected url:", config.businessPage.businessUrl);
        assert.strictEqual(currentUrl, config.businessPage.businessUrl);
    }
}

module.exports = BusinessPage;