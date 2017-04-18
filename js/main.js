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
$(document).ready(function($) {
			$('.my-slider').unslider();
		});
