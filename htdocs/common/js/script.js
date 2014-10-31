$(function() {
/* ----------------------------------------------------------------------------------
　menu
---------------------------------------------------------------------------------- */
function menu(){
  var nav = $("#nav"),
      active ="js-nav",
      animSlideOn ="anim-slideOn",
      animSlideOff ="anim-slideOff",
      $wrapContents = $("#contents"),
      navWidth,
      flag = false;

  $("#btn-menu").find("a").click(function(){
      if(flag===false){
        nav.addClass(active);
        flag = true;
        navWidth = nav.width();
        $wrapContents.addClass(animSlideOn);
        if(($wrapContents).hasClass(animSlideOff)){
          ($wrapContents).removeClass(animSlideOff);
        }
        $wrapContents.css({"right":navWidth+"px"});
      }else{
        navWidth = nav.width();
        nav.removeClass(active);
        $wrapContents.addClass(animSlideOff);
        $wrapContents.removeClass(animSlideOn);
        $wrapContents.css({"right":"0"});
        flag = false;
      }
      return false;
    });

    $(window).resize(function() {
      if(flag===true){
          navWidth = nav.width();
          $wrapContents.css({"right":navWidth+"px"});    
      }
    });
  }
menu();

});
