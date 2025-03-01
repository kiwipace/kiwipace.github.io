/* 
==============================================
* Green Paper - v1.0
==============================================

* Demo: https://demo.uicard.io/green-paper-pro/
* Free Version: https://uicard.io/products/green-paper
* Premium Version: https://uicard.io/products/green-paper-pro

==============================================
* Coded By : UICardio https://uicard.io
==============================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Copyright 2018 UICardio
*/

//import * as mail-gunfrom from './node_modules/mail-gun.js/index.js

$(document).ready(function(){  
  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Smooth scroll
  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
  });


});
