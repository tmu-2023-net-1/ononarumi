
  $(document).ready(function() {
    $("#weatherImage2").click(function() {
      $("#fadeInImage2").fadeIn();
      $("#weatherImage1").fadeOut();
      $("#harewrap").css("padding-top", "400px");
      $("#weatherImage2").css("max-width","15%");
      $("#harewrap").css("align-items", "center");
      $(" #fadeInImage2").css("padding-right","15%");
      
    });
  });
  
  $(document).ready(function() {
    $("#weatherImage1").click(function() {
      $("#fadeInImage1").fadeIn();
      $("#weatherImage2").fadeOut();
      $("#amewrap").css("padding-top", "150%");
      $("#weatherImage1").css("max-width","13%");
      $("#weatherImage1").css("padding-left","60%");
      $("#amewrap").css("align-items", "center");
      $(" #fadeInImage1").css("padding-left","5%");
      $(" #fadeInImage1").css("max-width","100%")
      
    });
  });
  