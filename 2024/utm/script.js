//UTM
    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
        ((expires) ? ";	expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
  }

    function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
    if (begin !== 0) return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
  }

    function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
  }

    jQuery(window).on('load', function () {
        setCookie("myCookie", location.href.split('?')[1]);

    if (getCookie("myCookie") != 'undefined') {
      for (var i = 0; i < jQuery('a').length; i++) {
        var old_link = jQuery('a').eq(i).attr('href');
    if (location.href.includes('?')) {
          if (typeof (old_link) == typeof ('string')) {
            if (old_link.includes('?'))
    jQuery('a').eq(i).attr('href', old_link + '&' + getCookie("myCookie"));
    else if (old_link.includes('#')) {

    }
    else
    jQuery('a').eq(i).attr('href', old_link + '?' + getCookie("myCookie"));

          }
        }
      }

    for (var x = 0; x < jQuery(".block-mega-child-cats").find("a").length; x++) {
        jQuery(".block-mega-child-cats").find("a").hover(function () {
            for (var j = 0; j < jQuery(".td-mega-span").find("a").length; j++) {

                jQuery(".td-mega-span").eq(j).hover(function () {
                    for (var jj = 0; jj < this.getElementsByTagName("a").length; jj++) {
                        if (!this.getElementsByTagName("a")[jj].href.includes('?')) {
                            this.getElementsByTagName("a")[jj].href += '?' + getCookie("myCookie");
                        }
                    }
                    //console.log(this.getElementsByTagName("a")[0].href);
                });

            }
        });
      }

    }

  });


  // อันใหม่

  jQuery(window).on('load', function () {
    // ตรวจสอบว่า URL มีพารามิเตอร์ ?s= หรือไม่
    if (location.href.includes('?s=')) {
      return; // หยุดการทำงานของสคริปต์หากพบพารามิเตอร์ ?s=
    }
  
    setCookie("myCookie", location.href.split('?')[1]);
  
    if (getCookie("myCookie") != 'undefined') {
      for (var i = 0; i < jQuery('a').length; i++) {
        var old_link = jQuery('a').eq(i).attr('href');
        if (location.href.includes('?')) {
          if (typeof (old_link) == typeof ('string')) {
            if (old_link.includes('?'))
              jQuery('a').eq(i).attr('href', old_link + '&' + getCookie("myCookie"));
            else if (old_link.includes('#')) {
  
            }
            else
              jQuery('a').eq(i).attr('href', old_link + '?' + getCookie("myCookie"));
  
          }
        }
      }
  
      for (var x = 0; x < jQuery(".block-mega-child-cats").find("a").length; x++) {
        jQuery(".block-mega-child-cats").find("a").hover(function () {
          for (var j = 0; j < jQuery(".td-mega-span").find("a").length; j++) {
  
            jQuery(".td-mega-span").eq(j).hover(function () {
              for (var jj = 0; jj < this.getElementsByTagName("a").length; jj++) {
                if (!this.getElementsByTagName("a")[jj].href.includes('?')) {
                  this.getElementsByTagName("a")[jj].href += '?' + getCookie("myCookie");
                }
              }
              //console.log(this.getElementsByTagName("a")[0].href);
            });
  
          }
        });
      }
  
    }
  
  });
  