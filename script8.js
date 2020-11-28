window.onload = function(){
  setInterval(function(){
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
}

$(document).ready(function(){
  $("#T1").hover(function(){
    $("#T1").html("<i>ゆっくり過ごそう、ゆっくりね</i>").css("color","green");

  });
  
  $(".header-list").click(function(){
       $(".header-list").html("<b>ikite2021@gmail.com</b>");

});

})
