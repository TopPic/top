    document.addEventListener('DOMContentLoaded', function () {
      //var autoScrollOptions = { AutoScroll: Splide.Extensions.AutoScroll };

      new Splide('#carousel1', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        gap: 10,
        autoScroll: {
          speed: 1,
        },
        // direction: 'rtl',
        arrows: false, // Hide arrows
        pagination: false, // Hide pagination dots

      }).mount(window.splide.Extensions);

      new Splide('#carousel2', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        gap: 10,
        autoScroll: {
          speed: 1,
        },
        direction: 'rtl',
        arrows: false, // Hide arrows
        pagination: false, // Hide pagination dots
      }).mount(window.splide.Extensions);

      new Splide('#carousel3', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        gap: 10,
        autoScroll: {
          speed: 1,
        },
        // direction: 'rtl',
        arrows: false, // Hide arrows
        pagination: false, // Hide pagination dots
      }).mount(window.splide.Extensions);
    });
