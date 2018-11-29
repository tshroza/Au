import { protractor } from 'protractor/built';
import { browser, by, element, ElementFinder } from 'protractor';
import { environment } from '../../src/environments/environment';
import {expect} from 'chai';

let EC = protractor.ExpectedConditions;

export class Helper {
  public static async isElementDisplayed(element: ElementFinder): Promise<{}> {
    return element.isPresent();
  }

  public static async isElementDisplayedById(id: string): Promise<{}> {
    return Helper.isElementDisplayed(element(by.id(id)));
  }

  public static async waitForVisibilityOf(element: ElementFinder, waitMs?: number): Promise<{}> {
    return browser.wait(EC.visibilityOf(element), waitMs || 5000);
  }

  public static async waitForVisibilityById(id: string, waitMs?: number): Promise<{}> {
    return browser.wait(EC.visibilityOf(element(by.id(id))), waitMs || 45000);
  }

  public static async waitForVisibilityByName(id: string, waitMs?: number): Promise<{}> {
    return browser.wait(EC.visibilityOf(element(by.name(id))), waitMs || 45000);
  }

  public static async waitForVisibilityByCss(css: string, waitMs?: number): Promise<{}> {
    return browser.wait(EC.visibilityOf(element.all(by.css(css)).first()), waitMs || 45000);
   }
  
  public static async fillInputField(element: ElementFinder, val: string): Promise<void> {
    Helper.waitForVisibilityOf(element);
    return element.sendKeys(val);
  }

  public static async fillInputFieldById(id: string, val: string): Promise<void> {
    Helper.waitForVisibilityById(id);
    return element(by.id(id)).sendKeys(val);
  }

  public static async fillInputFieldByName(id: string, val: string): Promise<void> {
    Helper.waitForVisibilityByName(id);
    return element(by.name(id)).sendKeys(val);
  }

  public static async fillInputFieldByCss(id: string, val: string): Promise<void> {
    Helper.waitForVisibilityByCss(id);
    return element(by.css(id)).sendKeys(val);
  }

  public static async clickButton(element: ElementFinder): Promise<void> {
     browser.wait(EC.elementToBeClickable(element));
     return element.click();
   }

  public static async clickButtonById(id: string): Promise<void> {
   // Helper.waitForVisibilityById(id);
    browser.wait(EC.elementToBeClickable(element(by.id(id))));
    return element(by.id(id)).click();
  }

  public static async clickButtonByCss(id: string): Promise<void> {
   // Helper.waitForVisibilityByCss(id);
    //browser.wait(EC.elementToBeClickable(element(by.css(id))));
    // browser.wait(EC.presenceOf(element(by.css(id))));
    //return element(by.css(id)).click();
    browser.wait(EC.elementToBeClickable(element.all(by.css(id)).first()));
    return element.all(by.css(id)).first().click();
  }

  public static async navigateToExpense(path: string): Promise<void> {
    browser.waitForAngularEnabled(false);
    return browser.get(environment.expenseUrl + path);
  }

  public static async navigateToApp(path: string): Promise<void> {
    browser.waitForAngularEnabled(false);
    return browser.get(environment.appUrl + path);
  }

  public static async navigateToLogin(path: string): Promise<void> {
    browser.waitForAngularEnabled(false);
    return browser.get(environment.loginUrl + path);
  }

  public static async 
}
