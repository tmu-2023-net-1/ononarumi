


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
      $("#next3").fadeIn();
      //ゆっくり下へスクロール
      $('html,body').animate({scrollTop:$('#text5').offset().top});
  });

  $("#choice6").click(function(){
      $("#me2").fadeOut();
      $("#choice5").fadeOut();
      $("#choice6").fadeOut();
      $("#text6").fadeIn();
      $("#next4").fadeIn();
      //ゆっくり下へスクロール
      $('html,body').animate({scrollTop:$('#text6').offset().top});

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
      $("#next7").fadeIn();

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

  
  
  $("#pool").fadeOut();
  $("#1bun").fadeOut();
  $("#date1").fadeOut();
  $("#next2").fadeOut();
  $("#date2").fadeOut();
  $("#2bun").fadeOut();
  $("#para2").fadeOut();
  $("#day2").fadeOut();

  $("#day3").fadeIn();
 
  
});

  $("#next3").click(function(){
    $("#text5").fadeOut();
    $("#next3").fadeOut();
    $("#date2").fadeOut();
    $("#2bun").fadeOut();
    $("#para2").fadeOut();
    $("#day4").fadeIn();
    $("#section5").hide();

  });

  $("#next4").click(function(){
  
    $("#text6").fadeOut();
    $("#next4").fadeOut();
    $("#date2").fadeOut();
    $("#2bun").fadeOut();
    $("#para2").fadeOut();
    $("#section5").hide();
    $("#endress").fadeIn();

    //5秒後にリロードする
    setTimeout(function(){
      location.reload();
    }
    ,6000);

  
  });

$("#next5").click(function(){
  $("#next5").fadeOut();
  $("#section5").fadeOut();
  $("#day5").fadeIn();
  
});

$("#next6").click(function(){

  $("#next6").fadeOut();
  $("#date5").fadeOut();
  $("#day5").fadeOut();
  $("#day6").fadeIn();
});

$("#next7").click(function(){

  $("#next7").fadeOut();
  $("section4").fadeOut();
  $("#date3").fadeOut();
  $("#para3").fadeOut();
  $("#sea").fadeOut();
  $("#day7").fadeIn();

});

  $("#next8").click(function(){
    
    $("#next8").fadeOut();
    $("#date7").fadeOut();
    $("#day7").fadeOut();
    $("#day8").fadeIn();
  
  });

  $("#next9").click(function(){

    $("#next9").fadeOut();
    $("#date8").fadeOut();
    $("#day8").fadeOut();
    $("#day9").fadeIn();
  });


$("#day6").click(function(){

  $("#day6").fadeOut();
  $("#date6").fadeIn();
  $("#back").fadeIn();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#date6').offset().top});

});

$("#day7").click(function(){

  $("#day7").fadeOut();
  $("#date7").fadeIn();
  $("#next8").fadeIn();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#date7').offset().top});

});

$("#day8").click(function(){

  $("#day8").fadeOut();
  $("#date8").fadeIn();
  $("#next9").fadeIn();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#date8').offset().top});


});

$("#day9").click(function(){

  $("#day9").fadeOut();
  $("#date9").fadeIn();
  $("#back2").fadeIn();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#date9').offset().top});

});


  $("#day4").click(function(){
    $("#section5").fadeIn();
    $("#day4").fadeOut();
    //ゆっくり下へスクロール
    $('html,body').animate({scrollTop:$('#section5').offset().top});
  });

  $("#day5").click(function(){
    $("#day5").fadeOut();
    $("#date5").fadeIn();
    $("#next6").fadeIn();
    //ゆっくり下へスクロール
    $('html,body').animate({scrollTop:$('#date5').offset().top});
  });

$("#day3").click(function(){
  $("#text4").fadeIn();
  $("#section4").fadeIn();
  $("#para3").fadeIn();
  $("#me3").fadeIn();
  $("#date3").fadeIn();
  $("#choice7").fadeIn();
  $("#choice8").fadeIn();
  $("#day3").fadeOut();
  //ゆっくり下へスクロール
  $('html,body').animate({scrollTop:$('#section4').offset().top});
  
  
});

$("#day2").click(function(){
  $("#date2").fadeIn();
  $("#section3").fadeIn();
  $("#para2").fadeIn();
  $("#me2").fadeIn();
  $("#choice5").fadeIn();
  $("#choice6").fadeIn();
  $("#day2").fadeOut();
  $("#endress").hide();
  $("#day6").hide();
  $("#date6").hide();

 

});

//リロードしたらページ上部に戻る
$(window).on('load',function(){
  $('html,body').animate({ scrollTop: 0 }, '1');
});




});



$("#back").click(function(){

  $("#back").fadeOut();
  $("#date6").fadeOut();
  $("#day6").fadeOut
  //画像(kaseijin.png）を表示
  $("#kaseijin").fadeIn();
    //ゆっくり下へスクロール
    $('html,body').animate({scrollTop:$('#kaseijin').offset().top});
    //トップに戻るボタンを表示
    $("#top").fadeIn();
    $("button").fadeIn();
    $("#nikki").fadeIn();
  
});

$("#back2").click(function(){

  $("#back2").fadeOut();
  $("#date9").fadeOut();
  $("#day9").fadeOut
  //画像(kaseijin.png）を表示
  $("#marmaid").fadeIn();

    //ゆっくり下へスクロール
    $('html,body').animate({scrollTop:$('#marmaid').offset().top});
    //トップに戻るボタンを表示
    $("#top").fadeIn();
    $("button").fadeIn();
    $("#nikki").fadeIn();


});

$("button").click(function(){
  location.reload();
});

