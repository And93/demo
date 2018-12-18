const BasePage = require('./BasePage');
const SearchJobBlock = require('../blocks/SearchJobBlock');

class CareersPage extends BasePage {

    constructor(browser) {
        super(browser);
        this.searchJobBlock = new SearchJobBlock(browser)
    }

    openCareersPage() {
        return this.browser.url('careers')
    }

    get headerString() {
        return this.getElement('.search-result__heading');
    }

    get itemOfSearchList() {
        return this.browser.$('.search-result__item-info');
    }

    get cityAndCountryString() {
        return this.browser.$('.search-result__location');
    }

    assertHeader(header) {
        const getText = () => this.headerString.getText();
        const regExp = new RegExp(`WE FOUND [0-9]+ JOB OPENINGS${' ' + header}`);
        this.browser.waitUntil(
            () => getText().search(regExp) !== -1,
            10000,
            `Text into header is: ${getText()}, but must be: ${regExp}`
        );
    }

    assertListOfSearch(position) {
        const getText = () => this.itemOfSearchList.getText();
        this.browser.waitUntil(
            () => getText().includes(position) === true,
            10000,
            `Text in search result is: ${getText()}, but must be: ${position}`
        );
    }

    assertCoutnryInSearchList(country) {
        const getText = () => this.cityAndCountryString.getText();
        const regExp = new RegExp(`[A-Z]+, ${country}`);
        this.browser.waitUntil(
            () => getText().search(regExp) !== -1,
            10000,
            `Country in search result is: ${getText()}, but must be: ${regExp}`
        );
    }
}

module.exports = CareersPage;