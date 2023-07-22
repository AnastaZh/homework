const { By } = require("selenium-webdriver");
const config = require("../config");
const assert = require("assert");

class MainPage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get(config.mainPage.baseUrl);
    }

    async clickButton(pathForButton) {
        const Button = await this.driver.findElement(By.xpath(pathForButton));
        const htmlCode = await Button.getAttribute("outerHTML");
        console.log("Button was found, htmlCode:", htmlCode);
        Button.click();
    }

    async openLoginList() {
        const logInList = await this.driver.findElement(By.xpath("//*[text()='Log in']"));

        //open the Log in list
        const actions = this.driver.actions({ async: true });
        await actions.move({ origin: logInList }).perform();
    }

    async findElementInLogInList(textForElement) {
        //generation of parameterized xpath and search the element
        const xpathExpression = `//*[text()='${textForElement}']`;
        const elementToFind = await this.driver.findElement(By.xpath(xpathExpression));

        //check that the element exist
        assert.ok(elementToFind, `The ${textForElement} element was not found`);

        //logging info about the element that was found
        const htmlCode = await elementToFind.getAttribute("outerHTML");
        console.log("Element that was found:", htmlCode);
    }
}

module.exports = MainPage;