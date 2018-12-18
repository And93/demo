const BaseBlock = require('../blocks/BaseBlock')

class BasePage extends BaseBlock {

    assertUrl(url) {
        const getUrl = () => this.browser.getUrl();
        this.browser.waitUntil(
            () => this.browser.getUrl() === url,
            10000,
            `The url of current page is: ${getUrl()}, but must be: ${url}`
        );
    }
}

module.exports = BasePage;