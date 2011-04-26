Imulus.Interface = function() {
	
	var Interface = this;
	
	Interface.init = function(){

		$('.slide-holder .slide').imulusSlideshow({
			 slidesNavItems: $('#slide-nav ul li'),
			 timeout: 4500,
			 speed: 500 
		});

	};
	
	// Fire it all up
	Interface.init();
	
}