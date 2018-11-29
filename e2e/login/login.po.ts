import { Helper } from './../helper/helper.po';
import { protractor } from 'protractor/built';
import { browser, by, element } from 'protractor';
import { environment } from '../../src/environments/environment';
import { expect } from 'chai';

export class LoginPage {

  private loginForm = element(by.id('loginFormaa'));
  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private nextButton = element(by.id('nextButton'));
  private googleButton = element(by.css('sts-login__alt-buttons'));
  private registerButton = element(by.css('sts-app-action__register'));
  private backButton = element(by.id('back-button'));
  private forgotPasswordButton = element(by.css('sts-app-action__forgot-password'));
  private loginButton = element(by.id('loginButton'));

  navigateTo() {
    // Login page is a non-Angular page - disable protractor's wait for Angular to be loaded
    browser.waitForAngularEnabled(false);
    return browser.get(environment.loginUrl);
  }

  checkIfLoginPage() {
    Helper.waitForVisibilityOf(this.loginForm);
    return Helper.isElementDisplayed(this.loginForm);
    //expect(false).to.be.true;
  }

  fillUsernameValid() {
    Helper.fillInputField(this.username, environment.user_base_name);
  }

  fillPasswordValid() {
    Helper.fillInputField(this.password, environment.user_base_password);
  }

  clickNextButton() {
    Helper.clickButton(this.nextButton);
  }

  clickGoogleButton() {
    Helper.clickButton(this.googleButton);
  }

  clickRegisterButton() {
    Helper.clickButton(this.registerButton);
  }

  clickBackButton() {
    Helper.clickButton(this.backButton);
  }

  clickForgotPasswordButton() {
    Helper.clickButton(this.forgotPasswordButton);
  }

  clickLoginButton() {
    Helper.clickButton(this.loginButton);
  }

  checkIfPasswordFieldVisible() {
    return Helper.isElementDisplayed(this.password);
  }

  checkIfBackButtonVisible() {
    return Helper.isElementDisplayed(this.backButton);
  }

  checkIfForgotPasswordButtonVisible() {
    return Helper.isElementDisplayed(this.forgotPasswordButton);
  }

  checkIfPasswordCheckmarkVisible() {

  }

  checkIfUsernameCheckmarkVisible() {

  }
}
