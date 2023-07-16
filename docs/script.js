


$('head').append(
  '<style>body{display:none;}'
  );
  $(window).on("load", function() {
  $('body').delay(600).fadeIn("slow");
  });

$(document).ready(function() {



  $("#choice1").click(function() {
    $("#text1").fadeIn();
    $("#rainy").fadeOut();
    $("#sunny").fadeOut();

      $("#date").fadeOut();
      $("#weather").fadeOut();
      
 
    //ゆっくり下へスクロール
      $('html,body').animate({scrollTop:$('#text1').offset().top});


  });



  $("#choice3").click(function(){
      $("#date").fadeOut();
      $("#weather").fadeOut();
      $("#park").fadeIn();
      $("#choice3").fadeOut();
      $("#choice4").fadeOut();
      $("#me").fadeOut();
      $("#next").fadeIn();
      //ゆっくり下へスクロール
      $('html,body').animate({scrollTop:$('#park').offset().top});
  
});

$("#choice4").click(function(){
  $("#date").fadeOut();
  $("#weather").fadeOut();
  $("#pool").fadeIn();
  $("#next2").fadeIn();
  $("#choice3").fadeOut();
  $("#choice4").fadeOut();
  $("#me").fadeOut();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#pool').offset().top});


});
  $("#choice5").click(function(){
      $("#me2").fadeOut();
      $("#choice5").fadeOut();
      $("#choice6").fadeOut();
      $("#text5").fadeIn();
  });

  $("#choice6").click(function(){
      $("#me2").fadeOut();
      $("#choice5").fadeOut();
      $("#choice6").fadeOut();
      $("#text6").fadeIn();
  });

  $("#choice7").click(function(){
      $("#me3").fadeOut();
      $("#choice8").fadeOut();
      $("#choice7").fadeOut();
      $("#gohome").fadeIn();

  });
  $("#choice8").click(function(){
      $("#me3").fadeOut();
      $("#choice8").fadeOut();
      $("#choice7").fadeOut();
      $("#sea").fadeIn();

  });

$("#next").click(function(){
  $("#text3").fadeIn();
 //#text1を非表示にする
  $("#park").fadeOut();
  $("#next").fadeOut();
  $("#date1").fadeOut();
  $("#1bun").fadeOut();
  
});

$("#next2").click(function(){
  $("#text4").fadeIn();
  $("day3").fadeIn();
  $("#section4").hide();
  $("#text1").fadeOut();});

$("#day3").click(function(){
  $("#text4").fadeIn();
  $("#section4").fadeIn();
  $("#para3").fadeIn();
  $("#me3").fadeIn();
  $("#day3").fadeOut();
  
});

$("#day2").click(function(){
  $("#date2").fadeIn();
  $("#section3").fadeIn();
  $("#para2").fadeIn();
  $("#me2").fadeIn();
  $("#choice5").fadeIn();
  $("#choice6").fadeIn();
  $("#day2").fadeOut();

 

});




});
