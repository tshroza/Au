Feature: Expense
  As a user
  I want create and edit expenses

  Background:
    Given I am logged in as user 'base'
    And I navigated to expense page

  Scenario: All fields are displayed when adding a new expense
    Given I am adding a manual expense
    Then I should see all required fields in add expense detail

  Scenario: Adding an expense
    Given I am adding a manual expense
    When I fill in all required fields in add expense
    And I save add expense
    Then I should see the added expense in the overview
