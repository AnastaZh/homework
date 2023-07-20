const {Builder, By} = require ("selenium-webdriver");

async function testButtonBusiness(){
//Test checks navigation to the Nordpass webpage and clicking on the Business button

//launch the browser
let driver = await new Builder().forBrowser("chrome").build();

//navigate to the application
await driver.get("https://nordpass.com/");

//find the Business button and click
const button = await driver.findElement(By.xpath("//*[@id='Hero - homepage']/section/div/div/div[1]/div[2]/div[1]/a"));

await button.click();

//close the browser
await driver.quit();

}

testButtonBusiness();

