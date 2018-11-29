Feature: Login
  As a user
  I need to login to Rydoo

  Scenario: 19720 Web_User_Sign in_Sign in with email 
    When user navigates to app '/' 
    Then I should see login page
    When I fill in username with valid credentials on login page
    Then I should see username checkmark on login page
    When I click next on login page
    Then I should see password field on login page
    Then I should see back button on login page
    Then I should see forgot password button on login page
    When I fill in password with valid credentials on login page
    Then I should see password checkmark on login page
    When I click login on login page
    Then I should be logged in