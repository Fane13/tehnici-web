$(document).ready(function(){
   
    $("#next1").click(function(){
      $("#c1").hide();
      $("#c2").show().css("visibility","visible");
      $(".progress-bar").css('width', '25%');  
      
      if($("#good_check").is(':checked'))
      {
        $("#checker").show();
        setTimeout(function() { $("#checker").fadeOut(); }, 20);  
      }
      else if($("#neutral_check").is(':checked'))
      {
        $("#neutral").show();
        setTimeout(function() { $("#neutral").fadeOut(); }, 20);
      }
      else if($("#bad_check").is(':checked'))
      {
        $("#sad").show();
        setTimeout(function() { $("#sad").fadeOut(); }, 20);
      }
    });
    $("#next2").click(function(){
        $("#c2").hide();
        $("#c3").show().css("visibility","visible");
        $(".progress-bar").css('width', '25%');  
        
        if($("#good_check").is(':checked'))
        {
          $("#checker").show();
          setTimeout(function() { $("#checker").fadeOut(); }, 20);  
        }
        else if($("#neutral_check").is(':checked'))
        {
          $("#neutral").show();
          setTimeout(function() { $("#neutral").fadeOut(); }, 20);
        }
        else if($("#bad_check").is(':checked'))
        {
          $("#sad").show();
          setTimeout(function() { $("#sad").fadeOut(); }, 20);
        }
      });
      $("#next3").click(function(){
        $("#c3").hide();
        $("#c4").show().css("visibility","visible");
        $(".progress-bar").css('width', '25%');  
        
        if($("#good_check").is(':checked'))
        {
          $("#checker").show();
          setTimeout(function() { $("#checker").fadeOut(); }, 20);  
        }
        else if($("#neutral_check").is(':checked'))
        {
          $("#neutral").show();
          setTimeout(function() { $("#neutral").fadeOut(); }, 20);
        }
        else if($("#bad_check").is(':checked'))
        {
          $("#sad").show();
          setTimeout(function() { $("#sad").fadeOut(); }, 20);
        }
      });
      $("#next4").click(function(){
        $("#c4").hide();
        $("#c5").show().css("visibility","visible");
        $(".progress-bar").css('width', '25%');  
        
        if($("#good_check").is(':checked'))
        {
          $("#checker").show();
          setTimeout(function() { $("#checker").fadeOut(); }, 20);  
        }
        else if($("#neutral_check").is(':checked'))
        {
          $("#neutral").show();
          setTimeout(function() { $("#neutral").fadeOut(); }, 20);
        }
        else if($("#bad_check").is(':checked'))
        {
          $("#sad").show();
          setTimeout(function() { $("#sad").fadeOut(); }, 20);
        }
      });
    

});