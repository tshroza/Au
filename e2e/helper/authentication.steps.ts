import { Authentication } from "./authentication.po";

var {Given, When, Then, Before, setDefaultTimeout} = require('cucumber');

(function () {

  let auth: Authentication;

  Before(() => {
    auth = new Authentication();
  });

  Given(/^I am logged in as user '(.*?)'/, (user: string) => { 
    if (user === 'base') {
      auth.loggedInBaseUser();
    } else {
      throw 'requested to be logged in as an unknown user by the test'
    }
  });
  
  When(/^I log in as user '(.*?)'/, (user: string) => { 
    switch(user) { 
        case 'base': { 
          auth.logInBaseUser();
          break; 
        } 
        case 'unknown': { 
          auth.logInUnknownUser();
          break; 
        } 
        case 'wrong password': {
          auth.logInValidUserWrongPassword();
          break;
        }
        case 'empty password': {
          auth.logInValidUserEmptyPassword();
        }
        default: { 
          throw 'Error logging is as: ' + user
        } 
     } 
  });
  
}());
