const { browser, $ } = require('@wdio/globals');

describe('Simple Test', () => {
  it('should open the website', async () => {
    await browser.url('https://practicesoftwaretesting.com');
    await browser.pause(2000);
    const title = await browser.getTitle();
    console.log('Page title:', title);
    expect(title).toContain('Practice Software Testing');
  });
});