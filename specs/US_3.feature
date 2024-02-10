Feature: Check available places
 As a user,
 I want to be able to see available seats in a salon on a specific 
 viewing so that I can determine if there are seats left that are interesting to me.

Background: 
Given the user is on the websites home page
And   user selects "Sample Movie" and show time and then clicks continue

Scenario: the user selects a "Sample Movie" and a movie showtime
Then the user selects the "biljettyp" and "antal" and clicks on the button "Gå vidare"
Then the system displays the available "Ledig plats" for the selected showtime
And  the user clicks on one of the first "Ledig plats"
And  the user verify that "Ledig plats" are clickable

Scenario: the user selects a "Sample Movie" and showtime, but all seats are occupied
Then the user selects the "biljettyp" and "antal" and clicks on the "Gå vidare"
And  the user should get an alert message "Välj säten innan du fortsätter"
