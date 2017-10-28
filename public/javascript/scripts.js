$(document).ready(function(){

  //Mobile Hamburger Menu Toggle
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav-menu').slideToggle(500);
  });


//Make Class Skill Tree expand on click. Original size if clicked again
  $('.classSkill').click(function(){
    if($(this).hasClass('clicked')){
      $('.classSkill').removeClass('clicked');
    }else
      if($(this).hasClass('clicked') != true){
        $('.classSkill').removeClass('clicked');
        $(this).addClass('clicked');
      }
  });

  $('section.classes classMenu ul li a').click(function(event){
    event.preventDefault();
    let $href = $(this).attr('href');
    let $anchor = $($href).offset();
    $('body').animate({
      scrollTop: $anchor.top
    }, 2500);
  });
  //
  // $('form button').click(function(){
  //   $('form input').remove();
  //   $('.g-recaptcha').remove();
  //   $(this).remove();
  //   $('.footer').css('grid-row', '8');
  //   $('.classContainer').css('grid-row', '7');
  // });

});
