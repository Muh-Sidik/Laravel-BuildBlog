/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();
/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict";

/* global UISearch: false */

/*-----------------------------------------------------------------------------------*/
/* 	SINGLE SLIDE
/*-----------------------------------------------------------------------------------*/
$(".blog-slide").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
	navigation : true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	BRAND SLIDE
/*-----------------------------------------------------------------------------------*/
$(".brand-slider").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
	navigation : true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	BANNER SLIDER 1
/*-----------------------------------------------------------------------------------*/
$('#bnr-slide').owlCarousel({
	center: true,
	items:1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem:true,
	loop:true,
	margin:30,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	responsive:{
		1170:{
			items:1
		}
	}
});
/*-----------------------------------------------------------------------------------*/
/* 	SINGLE SLIDE 2
/*-----------------------------------------------------------------------------------*/
$(".realted-slider").owlCarousel({ 
	items : 2,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	singleItem	: true,
	avigation : true,
	margin:30,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : false	
});
/*-----------------------------------------------------------------------------------*/
/* 	SINGLE SLIDE 2
/*-----------------------------------------------------------------------------------*/
$(".realted-slider-3").owlCarousel({ 
	items : 3,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	singleItem	: true,
	navigation : true,
	margin:30,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : false	
});

/*-----------------------------------------------------------------------------------*/
/* 	SINGLE SLIDE 2
/*-----------------------------------------------------------------------------------*/
$(".bnr-slide-2").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	singleItem	: true,
	navigation : true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : true,
	animateOut: 'fadeOut'	
});
/*-----------------------------------------------------------------------------------*/
/* 	FEATURED SLIDER 
/*-----------------------------------------------------------------------------------*/
$('.featured-slide').owlCarousel({
	stagePadding: 0,
	loop:true,
	center: true,
	margin:30,
	nav:false,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	navText: false,
	responsive:{
		280:{
			items:1
		},
		500:{
			items:1
		},
		600:{
			items:1
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:5
		},
	}
});
/*-----------------------------------------------------------------------------------*/
/* 	FEATURED SLIDER 
/*-----------------------------------------------------------------------------------*/
$('.slide-3').owlCarousel({
	loop:true,
	center: false,
	margin:30,
	nav:false,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	navText: false,
	responsive:{
		280:{
			items:1
		},
		500:{
			items:1
		},
		600:{
			items:1
		},
		800:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		},
	}
});

/*-----------------------------------------------------------------------------------*/
/* 	FEATURED PARALLEX SLIDE 
/*-----------------------------------------------------------------------------------*/
$(".featu-slide-2").owlCarousel({ 
	items : 1,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	singleItem	: true,
	navigation : true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination : true,
	loop : true,
	animateOut: 'fadeOut'	
});

/*-----------------------------------------------------------------------------------*/
/*  LEFT MENU
/*-----------------------------------------------------------------------------------*/
jQuery(".nav_close").click(function(){
	jQuery("#nav_right").toggleClass("position");
});
/*-----------------------------------------------------------------------------------*/
/*  MASONRY LAYOUT
/*-----------------------------------------------------------------------------------*/
var $container = $('#container');
		$container.imagesLoaded(function () {
			$container.isotope({
			itemSelector: '.item-mas',
			layoutMode: 'masonry'
		});
	});
});

$(window).imagesLoaded(function(){
	$('#wrap').addClass('active');
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
	var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(pattern1.test(input)){ return true; }else{ return false; }}     
	function proceed(){
		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var web = document.getElementById("website");
		var msg = document.getElementById("message");
		var errors = "";
	if(name.value === ""){ 
		name.className = 'error';
			return false;}    
			else if(email.value === ""){
			email.className = 'error';
			return false;}
			else if(checkmail(email.value)===false){
				alert('Please provide a valid email address.');
				return false;}
			else if(company.value === ""){
				company.className = 'error';
				return false;}
			else if(web.value === ""){
				web.className = 'error';
				return false;}
			else if(msg.value === ""){
				msg.className = 'error';
				return false;}
			else 
			{
$.ajax({
	type: "POST",
	url: "submit.php",
	data: $("#contact_form").serialize(),
	success: function(msg){
		//alert(msg);
		if(msg){
			$('#contact_form').fadeOut(1000);
			$('#contact_message').fadeIn(1000);
			document.getElementById("contact_message");
			return true;
		}
	}
});

}}

new UISearch( document.getElementById( 'sb-search' ) );
