/**
 * // This will run on the front end only.
 */

// Import Swiper dependency as module.
//import { Swiper } from '../../swiper/swiper-bundle.mjs';
//import Thumbs from '../../swiper/modules/thumbs.mjs';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

//old lightgallery
//import 'https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/js/lightgallery.js';


//import lightGallery from 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.es5.min.js';
//import lightgallery from 'https://cdn.jsdelivr.net/npm/lightgallery@2.7.2/+esm'
//import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";
import "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js";

//import lgZoom from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/zoom/lg-zoom.es5.min.js";
//import lightGallery from 'https://cdn.skypack.dev/lightgallery@2.0.0-beta.3';
//let $lgSwiper = document.getElementById("lg-swipper");

// Import internal Swiper config object.
import { swiperConfig } from './swiper-config-default.js';

document.addEventListener( 'DOMContentLoaded', () => {

	const containers = document.querySelectorAll( '.swiper-main' );

	// Select all thumbnail Swiper containers.
    	const thumbContainers = document.querySelectorAll('.swiper-thumbs');
    	const nextButtons = document.querySelectorAll('.swiper-button-next');
    	const prevButtons = document.querySelectorAll('.swiper-button-prev');

	if ( ! containers.length ) {
		return;
	}

	//var count = 0;
	containers.forEach( ( element, index ) => {

	    	const thumbElement = thumbContainers[index];

		//console.log(thumbElement);
	        //console.log(thumbElement.childNodes.length);


	        if (thumbElement.childNodes.length > 1) {
			//console.log('test '+index);

			//console.log(element.id);
			//const newThumbElement = document.querySelectorAll(element.id+' .swiper-thumbs');
			//console.log(newThumbElement);


	            const thumbSwiper = new Swiper(thumbElement, {
			//Threshold: 5,
			centeredSlides: true,
			centeredSlidesBounds: true, //fills out full bar wide
			//slideToClickedSlide: true,
	       	        slidesPerView: 3, // Number of thumbnails visible at a time.
			//initialSlide: 0,
			//slidesPerPage: 1,
	       	        spaceBetween: 10, // Space between thumbnails.
	       	        //watchSlidesProgress: true, // To update progress of thumbnails.
			//watchSlidesVisibility: true,
			//loop:true,
			//loopedSlides:999,
			//loop:true,
			//freeMode: true,
			direction: 'horizontal',
			//normalize: false,
			//items: 4,
			//autoHeight: true,
			//swiper: swiper,
			//watchOverflow: true,
			on: {
				/*slideChange: function(swiper) {
					console.log('index '+swiper.clickedIndex);
					swiper.slideTo(swiper.clickedIndex);
				},*/
				/*
				click: function(swiper) {
					console.log('index '+swiper.clickedIndex);
					swiper.slideTo(swiper.clickedIndex);
				},
				*/
			},
       		     });

	        	// Merge custom configuration with the default configuration.
	       		const customConfig = element.dataset.swiperConfig ? JSON.parse(element.dataset.swiperConfig) : {};

			const finalConfig = {
	       	        	...swiperConfig,
	       	        	...customConfig,
				navigation: {
					nextEl: nextButtons[index],
					prevEl: prevButtons[index],
				},
	       	        	thumbs: {
	       	        		swiper: thumbSwiper, // Link the thumbnail swiper to the main swiper.
       		       		},
	       	     	};

			// Initialize the main Swiper with the linked thumbnail Swiper.
		        //const mainSwiper = new Swiper(element, finalConfig);
		        //new Swiper(element, finalConfig);
			var swiper = new Swiper( element, finalConfig );

			//swiper.controller.control = thumbSwiper;
			//thumbSwiper.controller.control = swiper;
		}
		else
		{
			// Initialize the main Swiper with the linked thumbnail Swiper.
		        //const mainSwiper = new Swiper(element, swiperConfig);
		        //new Swiper(element, swiperConfig);
			var swiper = new Swiper( element, swiperConfig );

		}

		//let $lgSwiper = document.getElementById('lg-swipper');

		/*
		swiper.on('afterInit', function () {
		    swiper.slideTo(1, 1, false)
		    //swiper.slidePrev(1, false)
		})
		swiper.init()
		*/
		//swiper.SlideTo(1);

		//count++;


	} );

//			let $lgSwiper = document.getElementById("wpe-block-id-1");

/*
	const $lgContainer = document.getElementById("wpe-block-id-1");

	const lg = lightGallery($lgContainer, {
	  speed: 500,
	  showZoomInOutIcons: true,
	  actualSize: false,
		controls: true,
		selector: '.swiper-slide > img',
	  //plugins: [lgZoom]
	});
*/
} );
