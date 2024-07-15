document.addEventListener('DOMContentLoaded', function () {
  var mainCarouselSettings = {
    type       : 'fade',
    heightRatio: 0.5,
	    //fixedWidth  : 800,
    pagination : false,
    arrows     : false,
    cover      : true,
  }

  var thumbnailCarouselSettings = {
    fixedWidth  : 150,
    fixedHeight : 80,
    isNavigation: true,
    gap         : 10,
    focus       : 'center',
    pagination  : false,
    cover       : true,
    breakpoints : {
      600: {
        fixedWidth : 66,
        fixedHeight: 40,
      },
    },
  }
  
  
  
    var autoCarouselSettings = {
    type       : 'loop',
    drag       : 'free',
    focus      : 'center',
    autoWidth  : true,
    gap        : 10,
    autoScroll : {
      speed: 1,
    },
    arrows     : false,  // Hide arrows
    pagination : false,  // Hide pagination dots
  }

  // Select all elements with IDs starting with "carousel-auto-"
  var carouselsAuto = document.querySelectorAll('[id^="carousel-auto-"]');
  
  // Initialize each carousel with the settings
  carouselsAuto.forEach(function(carousel) {
    new Splide(carousel, autoCarouselSettings).mount(window.splide.Extensions);
  });
	 
	 
	 
	 

  const carousels = [1, 2, 3, 4, 5,];
  carousels.forEach(function(i) {
    var mainCarousel = new Splide(`#main-carousel-${i}`, mainCarouselSettings);
    var thumbnailCarousel = new Splide(`#thumbnail-carousel-${i}`, thumbnailCarouselSettings);

    mainCarousel.sync(thumbnailCarousel).mount();
    thumbnailCarousel.mount();

    mainCarousel.on('move', function () {
      var videos = document.querySelectorAll(`#main-carousel-${i} video`);
      videos.forEach(function (video) {
        video.pause();
      });
    });

    mainCarousel.on('active', function (slide) {
      var activeSlide = slide.slide;
      var video = activeSlide.querySelector('video');
      if (video) {
        video.play();
      }
    });
  });
	
});