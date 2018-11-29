import { by, element } from 'protractor';
import { Helper } from '../helper/helper.po';

export class DashboardPage {
  
  checkIfDashboardPage() {
    Helper.waitForVisibilityOf(element(by.css('.mx-dashboard-widget')));
    return element(by.css('.mx-dashboard-widget')).isPresent();
  }
}