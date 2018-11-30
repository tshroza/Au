import { Helper } from './../../helper/helper.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');    
chai.use(chaiAsPromised);
var expect = chai.expect;

export class ExpensePage {

  private date = Helper.getElementById('date');
  private amount = Helper.getElementById('amount');
  private currency = Helper.getElementById('currency');

  private saveButton = Helper.getElementById('save');
  private saveSubmitButton = Helper.getElementById('save-submit');
  private submitReportingButton = Helper.getElementById('submit-reporting');
  private cancelButton = Helper.getElementById('cancel');

  private tableExpenses = Helper.getElementById('table-expenses');

  private validRequiredFields = {
    date: '01/01/2017',
    amount: '100'
  };

  fillDateValid() {
      Helper.fillInputField(this.date, this.validRequiredFields.date);
  }

  fillAmountValid() {
    Helper.fillInputField(this.amount, this.validRequiredFields.amount);
}

  clickSaveButton() {
    Helper.clickButton(this.saveButton);
  }

  checkIfDateVisible() {
    return Helper.isElementDisplayed(this.date);
  }

  checkIfAmountVisible() {
    return Helper.isElementDisplayed(this.amount);
  }

  checkIfsaveButtonVisible() {
    return Helper.isElementDisplayed(this.saveButton);
  }

  checkIfSaveSubmitButtonVisible() {
    return Helper.isElementDisplayed(this.saveSubmitButton);
  }

  checkIfSubmitReportingButtonVisible() {
    return Helper.isElementDisplayed(this.submitReportingButton);
  }

  checkIfCurrencyVisible() {
    return Helper.isElementDisplayed(this.currency);
  }

  checkIfCancelButtonVisible() {
    return Helper.isElementDisplayed(this.cancelButton);
  }

  fillRequiredFields() {
    this.fillDateValid();
    this.fillAmountValid();
  }

  saveAddExpense() {
    this.clickSaveButton();
  }

  shouldSeeRequiredExpenseFields() {
    return Promise.all([
      expect(this.checkIfDateVisible()).to.eventually.be.true,
      expect(this.checkIfAmountVisible()).to.eventually.be.true,
      expect(this.checkIfCurrencyVisible()).to.eventually.be.true,
      expect(this.checkIfsaveButtonVisible()).to.eventually.be.true,
      expect(this.checkIfCancelButtonVisible()).to.eventually.be.true
    ]);   
  }

  shouldSeeAddedExpense() {
      let value = Helper.returnTableElementValue('table-expenses', 'date');
      return expect(value).to.eventually.equal(this.validRequiredFields.date);
  }
  
}
