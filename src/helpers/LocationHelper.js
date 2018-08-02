const BaseBlock = require('../blocks/BaseBlock');

class LocationHelper extends BaseBlock {

    get locationInput() {
        return this.getElement('.job-search__location [data-title]');
    };

    get dropDownMenu() {
        return this.browser.$('.select-box-results');
    };

    countryInList(country) {
        return this.browser.$(`[aria-label${country}] strong`);
    };

    cityInList(city) {
        return this.getElement(this.browser.$$(`li*=${city}`)[1]);
    };

    setValue(country, city) {
        const _country = (typeof country ==='string') ? `="${country}"` : ''
        const _city = (typeof city ==='string') ? city : `All Cities in ${country}`

        this.locationInput.click();
        this.dropDownMenu.waitForVisible();

        if (!this.countryInList(_country).isVisible()) {
            this.browser.scroll(this.countryInList(_country).selector);
        }
        
        this.countryInList(_country).waitForVisible();
        this.countryInList(_country).leftClick(1,1);
        
        if(_country !== '') {
            
            if(!this.cityInList(_city).isVisible()) {
                this.browser.scroll(this.cityInList(_city).selector);
            }
            this.cityInList(_city).click();
        }
        this.dropDownMenu.waitForVisible(10000, true);
    };
}

module.exports = LocationHelper;
