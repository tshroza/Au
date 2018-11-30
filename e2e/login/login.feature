Feature: Login
  As a user
  I need to login to Rydoo

Scenario: If I navigate to expense anonymously, I should see the login screen
    When user navigates to app '/'
    Then I should see login page

  Scenario: 19720 Web_User_Sign: Sign in with email
    Given I am on login page
    When I log in as user 'base'
    Then I should be logged in

  Scenario: Logging in with empty username
    Given I am on login page
    When I log in with empty username
    Then I should see empty username error on login page

  Scenario: Logging in with empty password
    Given I am on login page
    When I log in as user 'empty password'
    Then I should see empty password error on login page

  Scenario: Logging in with wrong credentials (wrong username)
    Given I am on login page
    When I log in as user 'unknown'
    Then I should see wrong credentials error message on login page

  Scenario: Logging in with wrong credentials (wrong password)
    Given I am on login page
    When I log in as user 'wrong password'
    Then I should see wrong credentials error message on login page

  Scenario: Logging in with empty username
    Given I am on login page
    When I log in with empty username
    Then I should see empty username error on login page

  Scenario: If I fill in a username, I should see a checkmark in the username field
    Given I am on login page
    When I log in with valid username
    Then I should see valid username on login page

  Scenario: If I fill in a password, password field should be masked and I should see a checkmark in the password field
    Given I am on login page
    And I used a valid username to log in
    When I fill in password on login page
    Then I should see valid password on login page