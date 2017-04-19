//jQuery Codes

$(document).ready(function() {
	// Custom jQuery code where the element's content changes when the button is clicked
	$('.next').click(function(){
		$('.yes').text('Then what are you waiting for?!');
	});
	// This plugin allows different phrases to change in between a string
	$("#js-rotating").Morphext({
	    animation: "bounceIn",
	    separator: ",",
	    speed: 2000,
	    complete: function () {
	    }
	});
	// This plugin allows images to slide in a carousel
	$('.automatic-slider').unslider({
		autoplay: true
	});
});

// Custom JavaScript Code

var customImage = document.getElementById ('custom');

customImage.addEventListener( 'mouseover', function(){ //listens for mouse over on image
	customImage.src = 'img/yum.jpg'; //changes image
});

customImage.addEventListener( 'mouseout', function(){ //listens for mouse out on image
	customImage.src = 'img/ramen.jpg'; //changes image back to original
});
