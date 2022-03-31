
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');

    driver.manage().setTimeouts({implicit: 0.5 })

    let searchBox = await driver.findElement(By.name('q'));

    await searchBox.sendKeys('linkedin mtrosin');
    await searchBox.sendKeys(Key.ENTER);

    await driver.quit();
})();