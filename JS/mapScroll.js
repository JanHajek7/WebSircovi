$('.map-container')
	.click(function() {
			$(this).find('iframe').css("pointer-events", "auto")})
	.mouseleave(function()  {
			$(this).find('iframe').css("pointer-events", "none")});