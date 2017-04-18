//JQuery Plugin Codes
$(document).ready(function($) {
	// This plugin allows different phrases to change in between a string
	$("#js-rotating").Morphext({
	    // The [in] animation type.
	    animation: "bounceIn",
	    // An array of phrases to rotate are created based on this separator
	    separator: ",",
	    // The delay between the changing of each phrase in milliseconds.
	    speed: 2000,
	    complete: function () {
	        // Called after the entrance animation is executed.
	    }
	});
	//This plugin allows images to slide in a carousel
	$('.automatic-slider').unslider({
		autoplay: true
	});
});

// Custom JavaScript Code

var customImage = document.getElementById ('custom');

customImage[0].addEventListener( "mouseover", function(){ //listens for mouse over on image
	customImage[0].src = "img/yum.jpg"; //changea image
});

mainImage[0].addEventListener( "mouseout", function(){ //listens for mouse out on image
	customImage[0].src = "img/ramen.jpg"; //changea image back
});
