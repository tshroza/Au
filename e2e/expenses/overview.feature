Feature: Expense overview
  As a user
  I want to see the expense overview

  Background:
    Given I am logged in as user 'base'
    And I navigated to expense page

  Scenario: 2915 Clicking on add expense button gives a list of all options
    When I click on add expense button
    Then I should see all available expense options
