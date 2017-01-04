$(function(){
  $('#portfolio-show').click(function(){
    $('#portfolio-modal').fadeIn();
  });
  
  $('.close-modal').click(function(){
    $('#portfolio-modal').fadeOut();
  });

   $('a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top - 60;
    
    $('html,body').animate({
      'scrollTop': position
    }, 500);
    
  });

});