jQuery(document).ready(function(){
	
	// preloader active
	var overlay = document.getElementById("preloader");
	window.addEventListener('load', function(){
	  overlay.style.display = 'none';
	})
	
	//scoll-to-top smoothly
	jQuery('.scrolltotop').click(function(){
		jQuery("html,body").animate({
			'scrollTop' : '0'
		}, 600);
		return false;
	});
	
	// owlCarousel active
	var owl = $('.priceLogo-slider');
	owl.owlCarousel({
		margin: 30,
		nav: false,
		loop: true,
		responsive: {
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			768:{
				items:3,
			},
			1024:{
				items:5,
			}
		},
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
    });
	
	// counter area
	$('.counter').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');
		$({ countNum: $this.text()}).animate({
			countNum: countTo
			},
		{
			duration: 8000,
			easing:'linear',
			step: function() {
			$this.text(Math.floor(this.countNum));
			},
			complete: function() {
			$this.text(this.countNum);
			//alert('finished');
			}
		});  
	});  
	
	//	googleMap active
		$('#map')
		  .gmap3({
			center: [23.6335544,88.5638975],
			zoom: 6,
			scrollwheel:  false 
		  })
		  .cluster({
			  size: 200,
			  markers: [
				{position: [23.8104659,90.327261]},
			//	{position: [24.8997595,91.8268841], icon: "http://maps.google.com/mapfiles/marker_green.png"},
			//	{position: [22.4083448,89.3601506]},
			//	{position: [24.5062316,88.3402457]}
			  ],
			  cb: function (markers) {
				if (markers.length > 1) { // 1 marker stay unchanged (because cb returns nothing)
				  if (markers.length < 20) {
					return {
					  content: "<div class='cluster cluster-1'>" + markers.length + "</div>",
					  x: -26,
					  y: -26
					};
				  }
				  if (markers.length < 50) {
					return {
					  content: "<div class='cluster cluster-2'>" + markers.length + "</div>",
					  x: -26,
					  y: -26
					};
				  }
				  return {
					content: "<div class='cluster cluster-3'>" + markers.length + "</div>",
					x: -33,
					y: -33
				  };
				}
			  }
		  });
	
	// jquery nav active
	jQuery('#nav').onePageNav();
	
	// jquery onePageNav active for sidebar-nav
	jQuery('#sidebar-nav').onePageNav();
	
	// Headroom active
	var myElement = document.querySelector(".headroom");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init(); 
	
	// Responsive Menu
	jQuery(".main-menu .bars").click(function() {
		jQuery(".main-menu ul").slideToggle(300);
		return false;
	});
	var sreenWidth = jQuery(window).width();
	jQuery(window).resize(function() {
		if(sreenWidth > 768) {
			jQuery(".main-menu ul").removeAttr("style");
		}
	});
	
	//wow.js Active
	new WOW().init();
	
	// counter area
	$('.counter').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');
		$({ countNum: $this.text()}).animate({
			countNum: countTo
			},
		{
			duration: 8000,
			easing:'linear',
			step: function() {
			$this.text(Math.floor(this.countNum));
			},
			complete: function() {
			$this.text(this.countNum);
			//alert('finished');
			}
		});  
	});  
	
});