var webdriver = require('selenium-webdriver');
var fs = require('fs');

function takeScreenshot(seleniumUrl, outputFile) {
    var driver = new webdriver.Builder().
        usingServer(seleniumUrl).
        withCapabilities(webdriver.Capabilities.firefox()).
        build();

    return driver.get('https://www.whatismybrowser.com/')
        .then(function (result) {
            return driver.takeScreenshot();
        })
        .then(function (data) {
            fs.writeFileSync(outputFile, data, 'base64');
        })
        .then(function() {
            console.log('Done', outputFile);
        }, function (err) {
            console.error('Failed', err);
        });
}

takeScreenshot('http://192.168.99.100:4444/wd/hub', 'firefox-1.png');
takeScreenshot('http://192.168.99.100:4445/wd/hub', 'firefox-2.png');
