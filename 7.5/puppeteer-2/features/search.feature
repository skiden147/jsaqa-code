Feature: 
    Feature: Movies ticket service
    
        Scenario: First happy path
        Given User is on booking page1 "/client/index.php"
        When User choses date1
        Then User choses movie and time1
        Then User chooses seats1
        Then User booking tickets1
        Then User sees booking code button1 "Получить код бронирования"

        Scenario: Second happy path test
        Given User is on booking page2 "/client/index.php"
        When User choses date2
        Then User choses movie and time2
        Then User chooses first seat2
        Then User chooses second seat2
        Then User booking tickets2
        Then User sees booking code button2 "Получить код бронирования"

        Scenario: Sad path test
        Given User is on booking page3 "/client/index.php"
        When User choses date3
        Then User choses movie and time3
        Then User chooses seats3
        Then User is trying to push booking button
        Then User remains on the movie hall page
    
        
        

