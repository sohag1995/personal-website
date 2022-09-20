

$(document).ready(function($){
	"use strict"
	

	//======== Sticky Nav==========
      $(".menu").sticky({ topSpacing: 0 });
	  
	//Scroll Spy		
			$('body').scrollspy({ target: '.navbar' })
		//smoothScroll
		smoothScroll.init();
			
	//jQuery Counter
    $('.counter').counterUp({
        time : 3000
    });
	// Isotope Gallery

		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth : '.grid-item'
		  }
		});

		var filterFns = {
		  numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		  },

		  ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		  }
		};

		$('.filters-button-group').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		  });
		});
		
		 //Portfolio Lightbox

		$('.grid-item').magnificPopup({
			delegate: 'a.port-view',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		//======== Slider ===============    
    $('.testumonial-wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
		dots:false,
        autoplay:false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
		
		
	
	 /*====  preloader js =====*/
	  setTimeout(function() {
			$('body').addClass('loaded');
		}, 500)
		
		
		
		
		
		
		
	
});
