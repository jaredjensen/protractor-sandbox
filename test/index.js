const { browser } = require('protractor');

describe('Protractor Sandbox', function () {
  it('should do the needful', async () => {
    await browser.get('http://protractor-web:8080/');
    const title = await browser.getTitle();
    console.log(title);
    expect(title).toEqual('Protractor Sandbox');
  });
});