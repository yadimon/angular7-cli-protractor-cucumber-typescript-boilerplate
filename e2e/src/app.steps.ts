import {Given, When, Then, Before} from 'cucumber';
import {expect} from 'chai';
import {AppPage} from './app.po';

let page: AppPage;

Before(() => page = new AppPage());

Given('the page is opened', () => {
  return page.navigateTo();
});

Then('I should see the welcome message {string}', async (text: string) => {
  const paragraphText = await page.getParagraphText();
  expect(paragraphText).to.equal(text);
});
