$(document).ready(function(){
  $('.phone-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true
  });

  $('.left').click(function(){
$('.slider').slick('slickPrev');
})

$('.right').click(function(){
$('.slider').slick('slickNext');
})
});
