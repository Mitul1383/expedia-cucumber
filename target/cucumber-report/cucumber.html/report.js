$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/Journey.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Destination and Search Flight Functionality",
  "description": "As a User I want to visit \u0027expedia\u0027 website for  book flight ticket\r\nthen  I can travel according to my  choice of destination",
  "id": "flight-destination-and-search-flight-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21194583500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Flight Page",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-navigate-to-flight-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Flight button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Flight page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 569325300,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnFlightButton()"
});
formatter.result({
  "duration": 3609006800,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iShouldNavigateToFlightPageSuccessfully()"
});
formatter.result({
  "duration": 506571800,
  "status": "passed"
});
formatter.after({
  "duration": 188200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select flying from \"\u003cFlying from\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Going to \"\u003cGoing to\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Departing date \"\u003cDeparting date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Returning date \"\u003cReturning date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see my selected \"\u003cDestination\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;",
  "rows": [
    {
      "cells": [
        "Flying from",
        "Going to",
        "Departing date",
        "Returning date",
        "Destination"
      ],
      "line": 25,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;1"
    },
    {
      "cells": [
        "Chicago",
        "Madras",
        "15/10/2020",
        "21/10/2020",
        "Select your departure to Madras"
      ],
      "line": 26,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;2"
    },
    {
      "cells": [
        "Perth",
        "Vancouver",
        "17/08/2020",
        "26/08/2020",
        "Select your departure to Vancouver"
      ],
      "line": 27,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;3"
    },
    {
      "cells": [
        "NewYork",
        "Kerala",
        "04/09/2020",
        "10/09/2020",
        "Select your departure to Kerala"
      ],
      "line": 28,
      "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18367212500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select flying from \"Chicago\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Going to \"Madras\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Departing date \"15/10/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Returning date \"21/10/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see my selected \"Select your departure to Madras\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 399227000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 529191300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chicago",
      "offset": 22
    }
  ],
  "location": "DestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 1319609700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Madras",
      "offset": 19
    }
  ],
  "location": "DestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 517837200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/10/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 752893800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/10/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 1378035800,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 324530800,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 292895200,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10459962200,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 15619296700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Madras",
      "offset": 26
    }
  ],
  "location": "DestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 1443249100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [Chennai]\u003e but was:\u003c...t your departure to [Madras]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.cucumber.stepdeps.DestinationTest.iShouldSeeMySelectedSuccessfully(DestinationTest.java:84)\r\n\tat ✽.Then I should see my selected \"Select your departure to Madras\" successfully(src/test/java/uk/co/expedia/resources/featurefile/Journey.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6956601100,
  "status": "passed"
});
formatter.before({
  "duration": 17502020900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select flying from \"Perth\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Going to \"Vancouver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Departing date \"17/08/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Returning date \"26/08/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see my selected \"Select your departure to Vancouver\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 247247700,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 550585900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perth",
      "offset": 22
    }
  ],
  "location": "DestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 1020678500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vancouver",
      "offset": 19
    }
  ],
  "location": "DestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 1003717200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17/08/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 779387200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26/08/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 837620000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 285605400,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 262099000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10257777400,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 15066234200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Vancouver",
      "offset": 26
    }
  ],
  "location": "DestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 204991800,
  "status": "passed"
});
formatter.after({
  "duration": 57600,
  "status": "passed"
});
formatter.before({
  "duration": 18332734400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify user should find destination according there choice",
  "description": "",
  "id": "flight-destination-and-search-flight-functionality;verify-user-should-find-destination-according-there-choice;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Flight tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select flying from \"NewYork\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Going to \"Kerala\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Departing date \"04/09/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select Returning date \"10/09/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select two Travellers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on close button after selection of passengers",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see my selected \"Select your departure to Kerala\" successfully",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 688424500,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnFlightTab()"
});
formatter.result({
  "duration": 553550000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewYork",
      "offset": 22
    }
  ],
  "location": "DestinationTest.iSelectFlyingFrom(String)"
});
formatter.result({
  "duration": 1192016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kerala",
      "offset": 19
    }
  ],
  "location": "DestinationTest.iSelectGoingTo(String)"
});
formatter.result({
  "duration": 577106800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/09/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectDepartingDate(String)"
});
formatter.result({
  "duration": 891332700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/09/2020",
      "offset": 25
    }
  ],
  "location": "DestinationTest.iSelectReturningDate(String)"
});
formatter.result({
  "duration": 1027219000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnTravellers()"
});
formatter.result({
  "duration": 305425900,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iSelectTwoTravellers()"
});
formatter.result({
  "duration": 385216500,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnCloseButtonAfterSelectionOfPassengers()"
});
formatter.result({
  "duration": 10330326800,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 13252974600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Kerala",
      "offset": 26
    }
  ],
  "location": "DestinationTest.iShouldSeeMySelectedSuccessfully(String)"
});
formatter.result({
  "duration": 169634100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c... your departure to K[ochi]\u003e but was:\u003c... your departure to K[erala]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.cucumber.stepdeps.DestinationTest.iShouldSeeMySelectedSuccessfully(DestinationTest.java:84)\r\n\tat ✽.Then I should see my selected \"Select your departure to Kerala\" successfully(src/test/java/uk/co/expedia/resources/featurefile/Journey.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 7102179900,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User I want to visit expedia website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18282109200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User should navigate to sign in page",
  "description": "",
  "id": "login-functionality;verify-user-should-navigate-to-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be in sign in page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 429665300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnAccountButton()"
});
formatter.result({
  "duration": 869449300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 615582700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeInSignInPageSuccessfully()"
});
formatter.result({
  "duration": 507427500,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.before({
  "duration": 20904655200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on home page of expedia website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Accept button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter email in email field \"mittulpattel@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password in password field \"prem1906@\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see system showing error message",
  "keyword": "Then "
});
formatter.match({
  "location": "DestinationTest.iAmOnHomePageOfExpediaWebsite()"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "location": "DestinationTest.iClickOnAcceptButton()"
});
formatter.result({
  "duration": 882292500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnAccountButton()"
});
formatter.result({
  "duration": 239326800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 386943500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mittulpattel@gmail.com",
      "offset": 30
    }
  ],
  "location": "LoginTest.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 1981604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prem1906@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 430129200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnSignInTab()"
});
formatter.result({
  "duration": 332120800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldSeeSystemShowingErrorMessage()"
});
formatter.result({
  "duration": 16796585500,
  "status": "passed"
});
formatter.after({
  "duration": 55100,
  "status": "passed"
});
});