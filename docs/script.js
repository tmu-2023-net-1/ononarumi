$(document).ready(function() {
    $("#button").click(function() {
      $("#text").fadeIn();
      $('html, body').animate({
        scrollTop: $("#text").offset().top
      }, 1000);
    });
  
    // テキストの表示後に縦書きスタイルを適用する
    $("#text").on("animationend", function() {
      $(this).addClass("vertical-text");
    });
  });
  