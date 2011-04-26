(function($){  
 $.fn.imulusSlideshow = function(config) {  

	slides = this;
	
	var defaults = {
		 slidesNavItems: $('#slide-nav ul li'),
		 timeout: 4500,
		 speed: 500
  };

  if( typeof config !== "undefined" && typeof config === "object") {
    for(var index in defaults) {
    	if(typeof config[index] === "undefined") { config[index] = defaults[index]; }
    }
  }
  else {
		config = defaults;
  }
	
 	Slideshow(slides,config);

	function Slideshow(slides,config) {
				
			//Set this to the current object
	    var Slideshow = this;
	
			//Config variables 	
	    var $slides = slides;
	    var $slidesNavItems = config.slidesNavItems;
	    var total = $slides.length-1;
	    var active = 0; // start on 0
	    var speed = config.speed;
	    var timeout = config.timeout;

	    Slideshow.init = function(){
	        this.build();
	        this.observe();
	        this.loop.start();
	    };

	    Slideshow.build = function(){
		 	};

		  Slideshow.observe = function(){
	      $slidesNavItems.mouseenter(function() {
	          var navIndex = $(this).index();
						if (navIndex !== active) {
							Slideshow.slides.goTo(navIndex);
							Slideshow.loop.stop();
						} else {
							Slideshow.loop.stop();
						};
	      });
		 	};

	    Slideshow.slides = {

	        next : function(){
						if (active >= total) {
							active = 0; 
							this.goTo(active);
						} else {
							active = active + 1;
							this.goTo(active);
						};
	        },

	        goTo : function(index){
	            this.hide();
	            this.show(index);
	            active = index;
	        },

	        show : function(index){
	            $slides.eq(index).fadeIn(speed);
	            $slidesNavItems.eq(index).addClass('active');
	        },

	        hide : function(){
	            $slides.fadeOut(speed);
	            $slidesNavItems.removeClass('active');
	        }    

	    };


	    Slideshow.loop = {

	        start : function(){
	            $.doTimeout('slideshow_loop', timeout, function(){
	                Slideshow.slides.next();
									return true;
	            });            
	        },

	        stop : function(){
	            $.doTimeout('slideshow_loop');
	        }        

	    };
	
			Slideshow.init();

	};//end Slideshow
  
 };  
})(jQuery);


