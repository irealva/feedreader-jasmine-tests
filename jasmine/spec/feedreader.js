/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

/* Principal @author: Irene Alvarado
 * Test ideas and starter code: Udacity
 */
$(function() {

    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS feeds:', function() {

        /* 
         * Tests that the allFeeds variable has been defined
         * and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Tests that all the feeds in the allFeeds object have a url defined
         * and that the URL is not empty.
         */
        it('have a "url" defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test that all feeds in teh allFeeds object have a name defined
         * and that the name is not empty.
         */
        it('have a "name" defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* Tests related to the initial RSS feeds entries */
    describe('Initial RSS feed:', function() {

        beforeEach(function(done) { //loadFeed is asynchronous.
            loadFeed(0, done);
        });

        /* 
         * Tests that when loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        it('has at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });


    /* Tests related  to new feed selection */
    describe('New feed selection:', function() {

        var before;
        var after;

        beforeEach(function(done) {
            before = $('.feed .entry');
            loadFeed(1, done);
        });

        /* 
         * Test that that checks that content actually changes when loadFeed
         * function is called
         */
        it('changes the content', function(done) {
            after = $('.feed .entry');
            expect(before).not.toEqual(after);
            done();
        });

        //Take loadFeed back to default setting
        afterEach(function(done) {
            loadFeed(0, done);
        });
    });

    /* Tests related to the sidebar menu */
    describe('The menu:', function() {

        /* 
         * Test that ensures menu is hidden by default
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* 
         * Test that ensures the menu changes
         * visibility when the menu icon is clicked.
         * It has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        describe('changes visibility when clicked - ', function() {
            // Before the expectations, make sure menu is clicked
            beforeEach(function() {
                $('.menu-icon-link').trigger('click');
            });

            //Menu has to display when clicked
            it('displays when clicked', function() {
                expect($('body').hasClass('menu-hidden')).toBe(false);
            });

            //Menu should hide when clicked again
            it('hides when clicked again', function() {
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });
    });

}());
