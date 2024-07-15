  $(document).ready(function() {
        var $stickyDiv = $('#stkmenu');
        var offset = $stickyDiv.offset();
        
         $(window).scroll(function() {
                if ($(window).width() >= 768) {
                    if ($(window).scrollTop() > offset.top - 90) {
                        $stickyDiv.css({
                            position: 'fixed',
                            top: '90px',
                            //width: $stickyDiv.width() + 'px'
                        });
                    } else {
                        $stickyDiv.css({
                            position: 'relative',
                            top: 'auto',
                            //width: 'auto'
                        });
                    }
                } else {
                    // Reset styles if screen width is less than 768px
                    $stickyDiv.css({
                        position: 'relative',
                        top: 'auto',
                        //width: 'auto'
                    });
                }
            });
    });