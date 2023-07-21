const { Builder, By } = require("selenium-webdriver");
const config = require("../config");
const MainPage = require("../pages/MainPage")
const BusinessPage = require("../pages/BusinessPage")
const PersonalPage = require("../pages/PersonalPage")

let driver;
let mainPage;

beforeEach(async function () {
  driver = await new Builder().forBrowser('chrome').build();
  mainPage = new MainPage(driver);
  await mainPage.open();
});

afterEach(async function () {
  await driver.quit();
});

describe('tests for the first personal and business buttons', function () {
  it('check the Business button', async function () {

    const businessPage = new BusinessPage(driver)

    await mainPage.clickButton(config.xpathForFirstBusinessButton);
    await businessPage.checkOpeningBusinessPage();
  });

  it('check the Personal button', async function () {

    const personalPage = new PersonalPage(driver)

    await mainPage.clickButton(config.xpathForFirstPersonalButton);
    await personalPage.checkOpeningPersonalPage();
  });
});

describe('tests for the login list', function () {
  it('ckeck elements in the Log in list', async function () {

    await mainPage.openLoginList()
    await mainPage.findElementInLogInList(config.accessMyPasswordsText)
    await mainPage.findElementInLogInList(config.manageMySubscriptionText)
    await mainPage.findElementInLogInList(config.accessBusinessAdminPanelText)

  })

});
