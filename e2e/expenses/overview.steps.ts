import { ExpenseOverviewPage } from './overview.po';

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');

(function () {

  let page: ExpenseOverviewPage;

  Before(() => {
    page = new ExpenseOverviewPage();
  });

  Given(/^I navigated to expense page/, function() {
    page.goToExpensePage();
  });

  When(/^I click on add expense button/, function() {
    page.clickAddExpenseButton();
  });

  Then(/^I should see all available expense options/, function() {
    return page.shouldSeeAvailableExpenseOptions();
  });

}());
