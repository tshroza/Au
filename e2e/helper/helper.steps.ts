import { browser, element, by } from 'protractor';
import { environment } from '../../src/environments/environment';
import { Helper } from '../helper/helper.po';
import { protractor } from 'protractor/built';

let EC = protractor.ExpectedConditions;

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/user clicks the button with id '(.*?)'/, (id:string) => {
  return Helper.clickButtonById(id);
});

When(/user clicks the button with css '(.*?)'/, (id:string) => {
    return Helper.clickButtonByCss(id);
  });

When(/user navigates to app '(.*?)'/, (url: string) => {
    return Helper.navigateToApp(url);
  });
Given(/user navigated to app '(.*?)'/, (url: string) => {
    return Helper.navigateToApp(url);
  });
  
When(/user navigates to expense '(.*?)'/, (url: string) => {
  return Helper.navigateToExpense(url);
});
Given(/user navigated to expense '(.*?)'/, (url: string) => {
  return Helper.navigateToExpense(url);
});

When(/user navigates to accounts '(.*?)'/, (url: string) => {
  browser.waitForAngularEnabled(false);
  return browser.get(environment.loginUrl + url);
});

Then(/the element with id '(.*?)' should be visible/, (id: string) => {
  return Helper.waitForVisibilityById(id);
});

Then(/the element with name '(.*?)' should be visible$/, (name: string) => {
  return Helper.waitForVisibilityByName(name);
});

When(/user fills field with id '(.*?)' with '(.*?)'/, (id:string, val: string) => {
  return Helper.fillInputFieldById(id, val);
});
Given(/user filled field with id '(.*?)' with '(.*?)'/, (id:string, val: string) => {
  return Helper.fillInputFieldById(id, val);
});

Then(/the element with css '(.*?)' should be visible/, (css: string) => {
    return Helper.waitForVisibilityByCss(css);
});
Given(/wait until element with css '(.*?)' is be visible/, (css: string) => {
  return Helper.waitForVisibilityByCss(css);
});

Then(/user fills the fields/, (dataTable) => {
    var rows = dataTable.hashes();
    for (let row of rows) {
      var by = row.by;
      var select = row.select;
      var val = row.value;
      //console.log('row '+ by + ' ' + select + ' ' + val);
      if (by === 'css') {
        Helper.fillInputFieldByCss(select, val);
      } else if (by === 'name') {
        Helper.fillInputFieldByName(select, val);
      } else {
        Helper.fillInputFieldById(select, val);
      }
   }
});