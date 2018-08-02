const CareersPage = require('../pages/CareersPage');
const careersPage = new CareersPage(browser);


describe('Job search form tests', ()=> {

    beforeEach(() => careersPage.openCareersPage())
    
    it('should checking the display of all vacancies if you do not fill in the input fields', () => {

        careersPage.searchJobBlock.findButton.click();
        careersPage.assertUrl('https://www.epam.com/careers/job-listings');
        careersPage.assertHeader('FOR YOU');
    })

    it('should checking the match of the search if you enter the correct keyword', () => {

        careersPage.searchJobBlock.keywordField.setValue('Test Automation Engineer')
        careersPage.searchJobBlock.findButton.click();
        careersPage.assertListOfSearch('Test Automation Engineer');
        careersPage.assertHeader('RELATED TO "TEST AUTOMATION ENGINEER"');
    })

    it('should checking the display of the list of vacancies when selecting all cities in a country', () => {

        careersPage.searchJobBlock.locationField.setValue('Belarus');
        careersPage.searchJobBlock.findButton.click();
        careersPage.assertHeader('FOR YOU');
        careersPage.assertCoutnryInSearchList('BELARUS')
    })

    it.skip('should checking the display of the list of vacancies when selecting skills', () => {

        browser.debug();
    })
})