# Udacity - Front End Nanodegree Feed Reader testing

## About Feed Reader testing

This project uses Jasmine to run test against a feed reader to ensure it works as expected.


## How to load the game locally

Download the folder from https://github.com/waynemcd/feed-reader/blob/master/index.html and open index.html in your browser.


# Tests conducted
- Test to make sure allFeeds variable has been defined and that it is not empty.
- Test to ensure URL is defined and not empty.
- Test allFeeds object and ensures it has a name defined and that the name is not empty.
- Test that ensures the menu element is hidden by default. 
- Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.     
- Test that ensures when the loadFeed function is called and completes, there is at least a single .entry element within the .feed container. 
- Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
