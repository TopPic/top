 document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-slider', {
            type: 'loop',
            //perPage: 2, // To make the transition smoother, we set perPage to 2.
			  drag   : 'free',
			  focus  : 'center',
			 autoWidth: true,
            //perMove: 1,
            //autoplay: true,
			    autoScroll: {
                    speed: 0.5,
                },
            //interval: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
			 gap        : 10,
            grid: {
                rows: 2,
                cols: 3,
                dimensions: [
                    [1, 1], // Large image
                    [2, 1], // Two smaller images in the first column
                    [2, 1], // Two smaller images in the second column
                    [1, 1], // Large image
                    [2, 1], // Two smaller images in the first column
                    [2, 1], // Two smaller images in the second column
					[1, 1], // Large image
                    [2, 1], // Two smaller images in the first column
                    [2, 1], // Two smaller images in the second column
                    [1, 1], // Large image
                    [2, 1], // Two smaller images in the first column
                    [2, 1], // Two smaller images in the second column
                ],
                gap: {
                    row: '10px',
                    col: '10px',
                },
            },
        }).mount(window.splide.Extensions);
    });