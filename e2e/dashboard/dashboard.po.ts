import { by, element } from 'protractor';
import { Helper } from '../helper/helper.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');    
chai.use(chaiAsPromised);
var expect = chai.expect;

export class DashboardPage {

  private dashboardWidget = element(by.css('.gyr-dashboard-widget'));
  
  checkIfDashboardPage() {
    return Helper.isElementDisplayed(this.dashboardWidget);
  }

  shouldBeLoggedIn() {
    return expect(this.checkIfDashboardPage()).to.eventually.be.true; 
  }
  
}