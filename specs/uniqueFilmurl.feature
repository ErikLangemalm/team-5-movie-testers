Feature: Unique URL for all Movies

  As a system owner and visitor,
  I want all Movie to have unique URL,
  So that I can bookmark them, share links with friends, etc.

  Scenario: System owner ensures unique URL for all movie views
    Given the system owner navigates to the home page
    Then clicks on a movie
    Then the system owner checks that each movie has a unique URL

  Scenario: Visitor bookmarks and shares Movie URL
    Given the visitor navigates to a specific Movie
    And the visitor shares the URL with a friend
    Then the friend should be able to access the same Movie by visiting the shared URL
