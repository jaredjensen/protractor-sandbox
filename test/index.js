describe('Protractor Sandbox', () => {
  it('should do the needful', async () => {
    await browser.get('http://protractor-web:8080/');
    const title = await browser.getTitle();
    expect(title).toEqual('Protractor Sandbox');
  });
});
