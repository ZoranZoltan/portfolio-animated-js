
//Timer
timer = 0;
$(document).on("touchstart mousedown", ".interactive", function(){
  clearTimeout(timer);
  $(".overlay").removeClass('show');
  timer = setTimeout(function(){    
    $(".overlay").addClass('show');
  },2500);
});
$(document).on("touchend mouseup", ".interactive", function(){
  clearTimeout(timer);  
  $(".overlay").removeClass('show');
});
setTimeout(function(){
  $(".loader").addClass('hide');
  $(".wrap").addClass('loaded');
},5000);
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};