import { LoginPage } from './login.po';
import { Helper } from '../helper/helper.po';
import { DashboardPage } from '../dashboard/dashboard.po';

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');

(function () {

  let page: LoginPage;
  let dashboardPage: DashboardPage;

  Before(() => {
    page = new LoginPage();
    dashboardPage = new DashboardPage();
  });

  When(/I fill in username with valid credentials on login page/, function() {
    page.fillUsernameValid();
  });

  When(/I fill in password with valid credentials on login page/, function() {
    page.fillPasswordValid();
  });

  When(/I click next on login page/, function() {
    page.clickNextButton();
  });

  When(/I click login on login page/, function() {
    page.clickLoginButton();
  });

  When(/user logs in with '(.*?)' and '(.*?)'/, (username: string, password: string) => {
    Helper.fillInputFieldById('username', username);
    Helper.clickButtonById('nextButton');
    Helper.fillInputFieldById('password', password);
    return Helper.clickButtonById('loginButton');
  });

  Then(/I should see login page/, function() {
    page.checkIfLoginPage();
  });

  Then(/I should see username checkmark on login page/, function() {
    page.checkIfUsernameCheckmarkVisible();
  }); 

  Then(/I should see password checkmark on login page/, function() {
    page.checkIfPasswordCheckmarkVisible();
  }); 

  Then(/I should see password field on login page/, function() {
    page.checkIfPasswordFieldVisible();
  }); 

  Then(/I should see back button on login page/, function() {
    page.checkIfBackButtonVisible();
  }); 

  Then(/I should see forgot password button on login page/, function() {
    page.checkIfForgotPasswordButtonVisible();
  }); 

  Then(/I should be logged in/, function() {
    dashboardPage.checkIfDashboardPage();
  }); 

}());
