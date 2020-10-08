$(window).scroll(function(){
  var sticky = $('.fixed-top'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('nav-sticky');
  else sticky.removeClass('nav-sticky');
});

// $('.nav-item-2').click(function() {
//   $('body').animate({
//       scrollTop: $('#' + $(this).attr('target')).offset().top
//   }, 1000);

//   console.log('asd')
// });

$('.nav-item-2, .footer-menu').on('click', function (e) {
  e.preventDefault();
  var to = $(this).attr('href');

  if(to == '#home') {
    $('html, body').animate({ 
      scrollTop: 0
    }, 1000);

  } else {
    
    $('html, body').animate({ 
      scrollTop: eval($(to).offset().top )
    }, 700);
  }
});