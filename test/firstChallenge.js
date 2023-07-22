const { Builder } = require("selenium-webdriver");
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

describe('cheking redirection from the main page', function () {
  it('the Business button leads to the business page', async function () {

    const businessPage = new BusinessPage(driver);

    await mainPage.clickButton(config.mainPage.heroHomepage.xpathBusinessButton);
    await businessPage.checkOpeningBusinessPage();
  });

  it('the Personal button leads to the personal page', async function () {

    const personalPage = new PersonalPage(driver);

    await mainPage.clickButton(config.mainPage.heroHomepage.xpathPersonalButton);
    await personalPage.checkOpeningPersonalPage();
  });
});

describe('checking elements on the main page', function () {
  it('the Log in list shows items', async function () {

    await mainPage.openLoginList();
    await mainPage.findElementInLogInList(config.mainPage.header.accessMyPasswordsText);
    await mainPage.findElementInLogInList(config.mainPage.header.manageMySubscriptionText);
    await mainPage.findElementInLogInList(config.mainPage.header.accessBusinessAdminPanelText);
  })
  
});
