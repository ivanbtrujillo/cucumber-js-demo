Feature: Listing football club stadiums 
Scenario: Stadiums
Given the following clubs and their stadiums
| Juventus | Allianz Stadium |
| AC Milan | San Siro        |
| AS Roma  | Stadio Olimpico |
Then "Juventus" stadium should be "Allianz Stadium"
But "AC Milan" should not be "Allianz Stadium"
Then "AC Milan" should be "San Siro"