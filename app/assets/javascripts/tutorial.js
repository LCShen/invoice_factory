function tutorial(){
  
  $(".tutorial-button").click(function(){
    
    setTimeout(function(){
      
      if ($(".tutorial-form").val() == "") {
        $(".tutorial-error").animate({opacity:"1"});
      }
      else if ($(".tutorial-1-confirm").html() == "true") {
        $(".tutorial-button").animate({width: "40px", 
                        backgroundColor: "#87D687", 
                        "border-top-color": "#9EF19E", 
                        "border-left-color": "#9EF19E",
                        "border-bottom-color": "#78B978",
                        "border-right-color": "#78B978"
        }, 200);
        $(".tutorial-button").html("✔");
        button_state = "success"
        $(".tutorial-error").hide();
        
        setTimeout(function(){
          $(".tutorial-inner-1").animate({opacity:"0"}, 500, function(){
            $(this).animate({height: "0px"});
            $(".tutorial-container").animate({width:"500px", height:"280px", backgroundColor: "#7FAE74"});
            $(".tutorial-container-container").animate({width:"500px"});
            $(".circle-container").animate({backgroundColor: "#6E9864"},function(){
              $(".circle-1").animate({backgroundColor: "#272727"}, 400);
              
              $(".circle-2").animate({backgroundColor: "#EDEE9D"}, 400, function(){
                $(".tutorial-inner-1").hide();
                $(".tutorial-inner-2").fadeIn();
                $(".tutorial-container").animate({marginLeft:"295px"}, function(){
                  $(".iframe-container").css({visibility:"visible"});
                  $(".iframe-container").animate({opacity:"1"});
                  
                  $(".tutorial-toplines-container").fadeIn();
                });
              });
              
            });
          });
        }, 500);
        
      }
      
    }, 500);
    
  });
  
  $(".tutorial-button").hover(function() {
    if (button_state == "success") {
      $(".tutorial-button").css({backgroundColor: "#5e965e"});
    }
  }, function() {
    if (button_state == "success") {
      $(".tutorial-button").css({backgroundColor: "#87D687"});
    }
  });
  
  $(".tutorial-inner-2").hover(function(){
    $(".tutorial-2-tooltip").fadeIn();
  }, function() {
    $(".tutorial-2-tooltip").fadeOut();
  });
  
  $(".tutorial-toplines-container").hover(function(){
    $(".toplines-tooltip").fadeIn();
  }, function() {
    $(".toplines-tooltip").fadeOut();
  });
  
  $(".tutorial-button-2").click(function(){
    $(".tutorial-container").animate({backgroundColor: "#AA8AAC", height: "562px"});
    $(".circle-container").animate({backgroundColor: "#967798"});
    $(".circle-3").animate({backgroundColor: "#FFCE83"});
    $(".circle-2").animate({backgroundColor: "#272727"});
    $(".iframe-container").animate({bottom: "562px"});
    $(".tutorial-toplines-container").fadeOut();
    $(".tutorial-inner-2").fadeOut(function(){
      $(".tutorial-inner-3").fadeIn();
    });
    
    
  });
  
  $(".tutorial-button-3-submit").click(function(){
    
    $.ajax({
        type: "GET",
        url: '/tutorial_complete'
    });
    
    $(".iframe-container").fadeOut();
    $(".tutorial-inner-3").fadeOut(function(){
      $(".tutorial-inner-4").fadeIn();
      $(".tutorial-container").animate({marginLeft: 0, backgroundColor: "#B8B7D8", height: "240px"});
      $(".circle-container").animate({backgroundColor: "#9493AC"});
      $(".circle-4").animate({backgroundColor: "#A95757"});
      $(".circle-3").animate({backgroundColor: "#272727"});
    });
    
  });
}
