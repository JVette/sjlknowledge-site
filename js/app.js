$(document).ready(function(){

 $("#nav").addClass("js").before('<div id="menuBtn"><img src="img/menubtn.png"></div>');
                $("#menuBtn").click(function(){
                  $("#nav").toggle();
                });
                $(window).resize(function(){
                  if(window.innerWidth < 1003) {
                    $("#nav").removeAttr("style");
                  }
                });


  $('.autoplay').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});
