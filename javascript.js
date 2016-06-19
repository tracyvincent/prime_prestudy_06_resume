$(document).ready(function() {
  $('button').on('click', function() {
  	$('.container').slideToggle();
  	$('.switch').toggleClass('on');
  })
});