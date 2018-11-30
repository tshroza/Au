import { Helper } from './../helper/helper.po';
import { environment } from '../../src/environments/environment';
import { LoginPage } from './../login/login.po';
import { DashboardPage } from './../dashboard/dashboard.po';

export class Authentication {
  
    private login: LoginPage = new LoginPage();
    private dashboard: DashboardPage = new DashboardPage();

    public static baseUser = {
        username: environment.user_base_name,
        password: environment.user_base_password
    };
    
    public static unknownUser = {
        username: 'wrongname',
        password: 'wrongpassword'
    };

    public static validUserWrongPassword = {
        username: environment.user_base_name,
        password: 'wrongpassword'
    };

    public static validUserEmptyPassword = {
        username: environment.user_base_name,
        password: ''
    };

    logInUser(username: string, password: string) {
        Helper.fillInputField(this.login.username, username);
        Helper.clickButton(this.login.nextButton);
        Helper.fillInputField(this.login.password, password);
        Helper.clickButton(this.login.loginButton);   
    }

    logInBaseUser() {
        this.logInUser(Authentication.baseUser.username, Authentication.baseUser.password);
    }

    loggedInBaseUser() {
        Helper.navigateToApp('/');
        this.logInBaseUser();
        return this.dashboard.checkIfDashboardPage();
    }

    logInUnknownUser() {
        this.logInUser(Authentication.unknownUser.username, Authentication.unknownUser.password);
    }

    logInValidUserWrongPassword() {
        this.logInUser(Authentication.validUserWrongPassword.username, Authentication.validUserWrongPassword.password); 
    }

    logInValidUserEmptyPassword() {
        this.logInUser(Authentication.validUserEmptyPassword.username, Authentication.validUserEmptyPassword.password);
    }
}