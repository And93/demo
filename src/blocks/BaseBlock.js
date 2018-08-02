class BaseBlock {
    
    constructor(browser) {
        this.browser = browser;
    }

    getElement(selector, needVisible = true) {

        const element = typeof selector === "string" ? this.browser.$(selector) : selector;

        if (!element.isExisting()) {
            element.waitForExist();
        } else if (!element.isVisible() && needVisible) {
            element.waitForVisible();
        }

        return element;
    }
}

module.exports = BaseBlock;
