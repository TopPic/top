 function resizeText() {
       const screenWidth = $(window).width();
       let newSize;
       
       if (screenWidth < 1320) {
         newSize = 16 - (1320 - screenWidth) / 100; // Decrease font size as screen width decreases
       } else {
         newSize = 16; // Max font size
       }
       
       // Ensure minimum font size of 10px
       newSize = Math.max(10, newSize);
       
       // Apply the new font size to the entire HTML document
       $('html').css('font-size', newSize + 'px');
       }
       // Function to check if the device is not a PC
       function isPC() {
         var userAgentInfo = navigator.userAgent;
         var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
         for (var i = 0; i < agents.length; i++) {
           if (userAgentInfo.indexOf(agents[i]) > 0) {
             return false;
           }
         }
         return true;
       }
        
       // Function to check if the screen orientation is horizontal (width > height)
       function isHorizontal() {
         return window.innerWidth > window.innerHeight;
       }
       function check_screen() {
         // Check if the device is not a PC (e.g., mobile or tablet)
         if (true) {
           // Initial call to set font size based on screen width
           resizeText();
           $(".content-container-main").addClass("sdk-active");
           // Call the resizeText function whenever the window is resized
         } else {
           $('html').css('font-size', 16 + 'px');
           $(".content-container-main").removeClass("sdk-active");
         }
       }
        
       check_screen()
       $(window).resize(check_screen);