/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure allFeeds variable has been defined 
		 * and that it is not empty.
         */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		it('URLs are defined', function() {
			allFeeds.forEach(function(feeds){
				expect(feeds.url).toBeDefined();
				expect(feeds.url.length).not.toBe(0);
			});
		});


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('Names are defined', function() {
			allFeeds.forEach(function(feeds){
				expect(feeds.name).toBeDefined();
				expect(feeds.name.length).not.toBe(0);
			});
		});
    });
	
	/* Test suite named "The menu" 
     * Test that ensures the menu element is hidden by default. 
     */
	describe('The menu', function() {
		it('menu is hidden', function(){
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		
	   /* Test that ensures the menu changes
     	* visibility when the menu icon is clicked. This test
		* should have two expectations: does the menu display when
     	* clicked and does it hide when clicked again.
     	*/
		 it('should change hidden state on click', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toBe(false);

        	$('.menu-icon-link').trigger('click');
        	expect($('body').hasClass('menu-hidden')).toBe(true);
      	});	
	});

	/* Test suite named "Initial Entries" */
	describe('Initial Entries', function () {
        /* Test that ensures when the loadFeed
         * function is called and completes, there is at least
         * a single .entry element within the .feed container.
         */
		beforeEach(function(done) {
        	loadFeed(0, done);
        });

        it('are present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
	
    /* Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		var feedOne = $('.feed').html();
		
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
		beforeEach(function(done) {
            loadFeed(0, function() {
            	loadFeed(1, done);
            });
        });

		it('is different from old', function() {
            expect($('.feed').html()).not.toBe(feedOne);
        });
	});
}());
