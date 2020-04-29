Feature: Flight Destination and Search Flight Functionality
  As a User I want to visit 'expedia' website for  book flight ticket
  then  I can travel according to my  choice of destination

  Scenario: Verify user should navigate to Flight Page
    Given I am on home page of expedia website
    When I click on Flight button
    Then I should navigate to Flight page successfully


  Scenario Outline: Verify user should find destination according there choice
    Given I am on home page of expedia website
    And I click on Accept button
    When I click on Flight tab
    And I select flying from "<Flying from>"
    And I select Going to "<Going to>"
    And I select Departing date "<Departing date>"
    And I select Returning date "<Returning date>"
    And I click on Travellers
    And I select two Travellers
    And I click on close button after selection of passengers
    And I click on search button
    Then I should see my selected "<Destination>" successfully
    Examples:
      | Flying from | Going to  | Departing date  | Returning date | Destination                        |
      | Chicago     | Madras    |  15/10/2020     | 21/10/2020     | Select your departure to Madras   |
      | Perth       | Vancouver |  17/08/2020     | 26/08/2020     | Select your departure to Vancouver|
      | NewYork     | Kerala    |  04/09/2020     | 10/09/2020     | Select your departure to Kerala   |


