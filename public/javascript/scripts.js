$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav-menu').slideToggle(500);
  });
});
