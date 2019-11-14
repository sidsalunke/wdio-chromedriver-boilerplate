const assert = require('chai').assert;

describe('Google search bar', () => {

  it('Search for an item', () => {
    browser.url(browser.options.baseUrl);
    $('input[title="Search"]').setValue('Macbook pro 2019');
    browser.keys('Enter');
    assert.equal(browser.getTitle(), 'Macbook pro 2019 - Google Search');
  });

})
