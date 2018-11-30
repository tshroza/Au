import { ExpensePage } from './expense.po';
import { ExpenseOverviewPage } from '../overview.po';

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');

(function () {

  let page: ExpensePage;
  let expenseOverview: ExpenseOverviewPage;

  Before(() => {
    page = new ExpensePage();
    expenseOverview = new ExpenseOverviewPage();
  });

  Given(/^I am adding a manual expense/, function() {
    expenseOverview.addManualExpense();
  });

  When(/^I fill in all required fields in add expense/, function() {
    page.fillRequiredFields();
  });

  When(/^I save add expense/, function() {
    page.saveAddExpense();
  });

  Then(/^I should see all required fields in add expense detail/, function() {
    return page.shouldSeeRequiredExpenseFields();
  });

  Then(/^I should see the added expense in the overview/, function() {
    return page.shouldSeeAddedExpense();
  });

}());
