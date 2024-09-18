$(function() {
 
  $('#miniimg01 img').hover(function(){
    $('.mainbigimg img').attr('src','images/cLeaves01.jpg');
  });

  $('#miniimg02 img').hover(function(){
    $('.mainbigimg img').attr('src','images/cLeaves02.jpg');
  });

  $('#miniimg03 img').hover(function(){
    $('.mainbigimg img').attr('src','images/cLeaves03.jpg');
  });

  $('.mainbigimg img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.bigimg1').attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
  });

$('.close-btn').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false
  });
});
