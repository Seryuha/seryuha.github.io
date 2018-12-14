jQuery(document).ready(function($){
	var contentSections = $('.cd-section'), //define the section we are in
		navigationItems = $('#cd-vertical-nav a'); //define the nav link that will be told our current section

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation(); //as you scroll, do the updateNavigation function
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash)); //SEXY Smooth Scroll with JS
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){ //for each section
			
            $this = $(this);
			
            var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1; //the current section
            
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) { //a mathematical operation to define the section selection area
				navigationItems.eq(activeSection).addClass('is-selected'); //add a class to the nav which alters its appearance
			} else {
				navigationItems.eq(activeSection).removeClass('is-selected'); //remove that class
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});