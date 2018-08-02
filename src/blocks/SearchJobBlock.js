const BaseBlock = require('./BaseBlock');
const LocationHelper = require('../helpers/LocationHelper')

class SearchJobBlock extends BaseBlock {

    get keywordField() {
        return this.getElement('[placeholder="Keyword or job ID"]')
    }

    get findButton() {
        return this.getElement('.job-search__submit');
    }

    get locationField() {
        return new LocationHelper(this.browser);
    }
}

module.exports = SearchJobBlock;