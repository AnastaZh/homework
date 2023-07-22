const { until } = require("selenium-webdriver");
const assert = require("assert");

const config = require("../config");

class PersonalPage {
    constructor(driver) {
        this.driver = driver;
    }

    async checkOpeningPersonalPage() {
        await this.driver.wait(until.urlContains(config.personalPage.personalUrl), 5000);
        const currentUrl = await this.driver.getCurrentUrl();
        console.log("Current url:", currentUrl);
        console.log("Expected url:", config.personalPage.personalUrl);
        assert.strictEqual(currentUrl, config.personalPage.personalUrl);
    }
}

module.exports = PersonalPage;