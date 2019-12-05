$(document).ready(function(){
  $(".know").mouseenter(function(){
    $(".know").css("color", "red");
  });
  $(".know").mouseleave(function(){
    $(".know").css("color", "white");
  });
});

$(document).ready(function(){
  $("#contact").mouseenter(function(){
    $("#contact").css("background-color", "red");
    $("#contact2").css("color","white");
  });
  $("#contact").mouseleave(function(){
    $("#contact").css("background-color", "transparent");
    $("#contact2").css("color","red");
  });
});