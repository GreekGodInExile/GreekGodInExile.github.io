 (function ($) {
    "use strict";
    
        $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 }, 
                      { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 }, 
                       { src: 'assets/img/3.jpg', fade: 1000, delay: 9000 }, 
                     
                    ]
                })('overlay', {
                    src: 'assets/plugins/vegas/overlays/15.png',
                });

            }
    )}
    
  )