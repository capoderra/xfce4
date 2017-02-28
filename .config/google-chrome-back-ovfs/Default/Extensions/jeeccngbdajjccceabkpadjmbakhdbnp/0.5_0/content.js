var observer = new MutationObserver(function(mutations) {
		
		var isItOne = document.querySelectorAll('.player-autoplay-interrupter'),
			isItTwo = document.querySelectorAll('.player-postplay-still-hover-container');
		
		if (isItOne.length) {
		    document.querySelectorAll('.player-autoplay-interrupter .button.continue-playing')[0].click();
		    console.log('skipped the interrupter for you');
		}
	
		if (isItTwo.length) {
		    document.querySelectorAll('.player-postplay-still-hover-container')[0].click();
		    console.log('skipped the countdown for you');
		}
});
var observerConfig = {
	attributes: false, 
	childList: true, 
	subtree: true,
	characterData: false
};
var targetNode = document.body;

setTimeout(function() {
	console.log('starting');
	observer.observe(targetNode, observerConfig);
}, 10000);


