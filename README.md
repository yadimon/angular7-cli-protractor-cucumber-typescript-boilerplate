## Steps to reproduce such repo:

_(see commits for details)_

#### Create new app
`
ng new your-app-name
`

#### Add `cucumber` framework types and `chai` as assertion lib:
  
```
npm i cucumber @types/cucumber chai @types/chai protractor-cucumber-framework  -D
```

#### Change `protractor.conf.js`:
##### remove jasmine options,
##### set framework to custom
```
framework: 'custom',
```
##### add path to framework
```
frameworkPath: require.resolve('protractor-cucumber-framework'),
```

##### change the specs path, they are now `.feature` files
```
specs: [
    './src/**/*.feature'
],
```
##### add cucumber options with ts compiler and steps path:
```
cucumberOpts: {
  compiler: "ts:ts-node/register",
  require: [
    './src/**/*.steps.ts'
  ]
},
```

#### Remove `app.e2e-spec.ts` and add `app.feature` and `app.steps.ts` file:

##### `e2e/src/app.feature`:
```gherkin
Feature: basic test

  Scenario: check content
    Given the page is opened
    Then I should see the welcome message 'Welcome to your-app-name!'

```

##### `e2e/src/app.steps.ts`:
```typescript
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
  return expect(paragraphText).to.equal(text);
});

```

#### run with `npm run e2e`
