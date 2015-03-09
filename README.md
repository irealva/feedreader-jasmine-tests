## Feedreader testing

In this project I was given a web-based application that reads RSS feeds and some ideas for implementing Jasmine test suites. I expanded the Jasmine spec file (*./jasmine/spec/feedreader.js) to perform the following tests: 

-Test that loops through each feed and ensures it has a URL defined that is not empty, as well as a name defined that is not empty.

-Test that menu element is hidden by default, displays when clicked, and hides when clicked again. 

-Test that ensures that at least one feed is shown when feeds are loaded (requires Jasmine's beforeEach and asynchronous done() function).

-Test that ensures that content actually changes when feeds are loaded. 

## Getting started

Simply open index.html to see the Jasmine tests.

