import { Helper } from './../helper/helper.po';
import { by, element, browser } from 'protractor';
import { environment } from '../../src/environments/environment';
import { Authentication } from './../helper/authentication.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');    
chai.use(chaiAsPromised);
var expect = chai.expect;

export class LoginPage {

  private _username = Helper.getElementById('username');
  get username() {
    return this._username;
  }
  private _password = Helper.getElementById('password');
  get password() {
    return this._password;
  }
  private _nextButton = Helper.getElementById('next-button');
  get nextButton() {
    return this._nextButton;
  }
  private _loginButton = Helper.getElementById('login-button');
  get loginButton() {
    return this._loginButton;
  }

  private loginForm = Helper.getElementById('login-form');
  private backButton = Helper.getElementById('back-button');
  private googleButton = Helper.getElementById('google-button');
  private registerButton = Helper.getElementById('register-button');
  private forgotPasswordButton = Helper.getElementById('forgot-password');
  private emptyUsernameError = Helper.getElementById('username-required-error');
  private emptyPasswordError = Helper.getElementById('password_required_error');
  private invalidCredentialsError = Helper.getElementById('incorrect-credentials-error');
  private passwordCheckmark = Helper.getElementById('checkmark-password');
  private usernameCheckmark = Helper.getElementById('checkmark-username');

  private validCredentials = Authentication.baseUser;
  private invalidCredentials = Authentication.unknownUser;

  checkIfLoginPage() {
    return Helper.isElementDisplayed(this.loginForm);
  }

  checkIfUserNameFieldVisible() {
    return Helper.isElementDisplayed(this.username);
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

  checkIfGoogleButtonVisible() {
    return Helper.isElementDisplayed(this.googleButton);
  }

  checkIfRegisterButtonVisible() {
    return Helper.isElementDisplayed(this.registerButton);
  }

  checkIfNextButtonVisible() {
    return Helper.isElementDisplayed(this.nextButton);
  }

  checkIfPasswordCheckmarkVisible() {
    return Helper.isElementDisplayed(this.passwordCheckmark);
  }

  checkIfUsernameCheckmarkVisible() {
    return Helper.isElementDisplayed(this.usernameCheckmark);
  }

  checkIfInvalidCredentialsErrorVisible() {
    return Helper.isElementDisplayed(this.invalidCredentialsError);
  }

  checkIfEmptyUsernameErrorVisible() {
    return Helper.isElementDisplayed(this.emptyUsernameError);
  }

  checkIfEmptyPasswordErrorVisible() {
    return Helper.isElementDisplayed(this.emptyPasswordError);
  }

  fillUsernameValid() {
    Helper.fillInputField(this.username, this.validCredentials.username);
    this.clickNextButton();
  }

  fillUsernameInvalid() {
    Helper.fillInputField(this.username, this.invalidCredentials.username);
  }

  fillUsernameEmpty() {
    Helper.fillInputField(this.username, '');
  }

  fillPasswordValid() {
    Helper.fillInputField(this.password, this.validCredentials.password);
    Helper.tabInputField(this.password);
  }

  fillPasswordInValid() {
    Helper.fillInputField(this.password, this.invalidCredentials.password);
    Helper.tabInputField(this.password);
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

  getUsernameText() {
    return Helper.GetInputFieldText(this.username);
  }

  getValidCredentials() {
    return this.validCredentials;
  } 

  getInvalidCredentials() {
    return this.invalidCredentials;
  }

  goToLogin() {
    browser.waitForAngularEnabled(false);
    return browser.get(environment.loginUrl);
  }

  logInWithCredentials(username: string, password: string) {
    Helper.fillInputField(this.username, username);
    this.clickNextButton();
    Helper.fillInputField(this.password, password);
    this.clickLoginButton();
  }

  logInWithEmptyUsername() {
    this.fillUsernameEmpty();
    this.clickNextButton();
  }

  logInWithValidUsername() {
    this.fillUsernameValid();
    this.clickNextButton();
  }

  shouldSeeLoginPage() {
    return Promise.all([
      expect(this.checkIfLoginPage()).to.eventually.be.true,
      expect(this.checkIfUserNameFieldVisible()).to.eventually.be.true,
      expect(this.checkIfGoogleButtonVisible()).to.eventually.be.true,
      expect(this.checkIfRegisterButtonVisible()).to.eventually.be.true,
      expect(this.checkIfNextButtonVisible()).to.eventually.be.true
    ]);
  }

  shouldSeeWrongCredentialsError() {
    return expect(this.checkIfInvalidCredentialsErrorVisible()).to.eventually.be.true;
  }

  shouldSeeEmptyUsernameError() {
    return expect(this.checkIfEmptyUsernameErrorVisible()).to.eventually.be.true;
  }

  shouldSeeEmptyPasswordError() {
    return expect()
  }

  shouldSeeValidUsername() {
    return Promise.all([
      expect(this.getUsernameText()).to.eventually.equal(this.validCredentials.username),
      expect(this.checkIfUsernameCheckmarkVisible()).to.eventually.be.true
    ]); 
  }

  shouldSeeValidPassword() {
    return Promise.all([
      expect(this.password.getAttribute('type')).to.eventually.equal('password'),
      expect(this.checkIfPasswordCheckmarkVisible()).to.eventually.be.true,
      expect(this.getUsernameText()).to.eventually.equal(this.validCredentials.username)
    ]); 
  }

}
