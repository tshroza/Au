import { Helper } from './../helper/helper.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');    
chai.use(chaiAsPromised);
var expect = chai.expect;

export class ExpenseOverviewPage {

  private addExpenseButton = Helper.getElementById('add-expense-button');
  private titleScan = Helper.getElementById('title-scan');
  private titleCreateManually = Helper.getElementById('title-create-manually');
  private addUpload = Helper.getElementById('add-upload');
  private addWebcam = Helper.getElementById('add-webcam');
  private addMail = Helper.getElementById('add-mail');
  private addExpense = Helper.getElementById('add-expense');

  goToExpensePage() {
    Helper.navigateToExpense('/');
  }

  addManualExpense() {
    this.clickAddExpenseButton();
    this.clickAddExpense();
  }

  clickAddExpenseButton() {
    return Helper.clickButton(this.addExpenseButton);
  }

  clickAddExpense() {
    return Helper.clickButton(this.addExpense);
  }

  checkIfTitleScanVisible() {
    return Helper.isElementDisplayed(this.titleScan);
  }

  checkIfTitleCreateManuallyVisible() {
    return Helper.isElementDisplayed(this.titleCreateManually);
  }

  checkIfAddUploadVisible() {
    return Helper.isElementDisplayed(this.addUpload);
  }

  checkIfAddWebcamVisible() {
    return Helper.isElementDisplayed(this.addWebcam);
  }

  checkIfAddMailVisible() {
    return Helper.isElementDisplayed(this.addMail);
  }

  shouldSeeAvailableExpenseOptions() {
    return Promise.all([
      expect(this.checkIfTitleScanVisible()).to.eventually.be.true,
      expect(this.checkIfTitleCreateManuallyVisible()).to.eventually.be.true,
      expect(this.checkIfAddMailVisible()).to.eventually.be.true,
      expect(this.checkIfAddUploadVisible()).to.eventually.be.true,
      expect(this.checkIfAddWebcamVisible()).to.eventually.be.true
    ]);   
  }
  
}
