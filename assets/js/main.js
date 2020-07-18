
function myFunction(x) {
  x.classList.toggle("change");

}


$(document).ready(function () {
  var alturaDivTxt2 = $('#banner').height();
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > alturaDivTxt2) {
      $("#menu").addClass("bgc-white");
      $(".nav-link").addClass("c-dark-gray");
      $(".bar1").addClass("bgc-dark-gray");
      $(".bar2").addClass("bgc-dark-gray");
      $(".bar3").addClass("bgc-dark-gray");
    } else {
      $("#menu").removeClass("bgc-white");
      $(".nav-link").removeClass("c-dark-gray");
      $(".bar1").removeClass("bgc-dark-gray");
      $(".bar2").removeClass("bgc-dark-gray");
      $(".bar3").removeClass("bgc-dark-gray")
    }
  });
});








$(document).ready(function () {

  $(".nav-link").click(function () {
    if ($('nav').hasClass('nav-aberto')) {
      $('nav').removeClass('nav-aberto');
      $('#abre-menu').addClass('collapsed');
      myFunction(x);

  } else {
    
   }
  });

});












$(document).ready(function(){
  $('.banner').slick({
    autoplay: true,
    autoplaySpeed: 4000000,
    dots: true,
    arrows: false,
  });




  $('.servicos-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
			




















































// $('#click-servicos').on('click', function(e) {
//   e.preventDefault();
//   var id = $(this).attr('href'),
//   targetOffset = $(id).offset().top;
    
//   $('html, body').animate({ 
//     scrollTop: targetOffset - 35
//   }, 500);
// });








