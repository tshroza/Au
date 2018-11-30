import { LoginPage } from './login.po';
import { DashboardPage } from '../dashboard/dashboard.po';

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');

(function () {

  let page: LoginPage;
  let dashboardPage: DashboardPage;

  Before(() => {
    page = new LoginPage();
    dashboardPage = new DashboardPage();
  });

  Given(/^I am on login page/, function() {
    page.goToLogin();
  });

  Given(/^I used a valid username to log in/, function() {
    page.fillUsernameValid();
  });

  When(/^I fill in password on login page/, function() {
    page.fillPasswordValid();
  });

  When(/^I log in with empty username/, function() {
    page.logInWithEmptyUsername();
  });

  When(/^I log in with valid username/, function() {
    page.fillUsernameValid();
  });

  Then(/^I should see login page/, function() {
    return page.shouldSeeLoginPage();
  });

  Then(/^I should see valid username on login page/, function() {
    return page.shouldSeeValidUsername();
  }); 

  Then(/^I should see valid password on login page/, function() {
    return page.shouldSeeValidPassword();
  });

  Then(/^I should be logged in/, function() {
    return dashboardPage.shouldBeLoggedIn();
  }); 

  Then(/^I should see wrong credentials error message on login page/, function() {
    return page.shouldSeeWrongCredentialsError();
  }); 

  Then(/^I should see empty username error on login page/, function() {
    return page.shouldSeeEmptyUsernameError();
  }); 

  Then(/^I should see empty password error on login page/, function() {
    return page.shouldSeeEmptyPasswordError();
  });

}());
