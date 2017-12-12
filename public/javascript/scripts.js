$(document).ready(function(){

  //Takes user back to homepage when clicking logo
  $('.logo').click(function(){
    window.location.href = ('/');
  });

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

//Check if Twitch Stream is Live or Not
});
