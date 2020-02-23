$(document).ready(function(){
    $("#des").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
    });
    $("#dev").click(function(){
        $("#devshow").toggle();
        $("#devhide").toggle();
    });
    $("#proman").click(function(){
        $("#pmshow").toggle();
        $("#pmhide").toggle();
    });
    $('.text').hide();
    $('.img1').animate({
        opacity:1
        
    });
    $('.img1').hover(function() {
        $(this).find('.text').fadeIn(300);
      }, function() {
        $(this).find('.text').fadeOut(100);
      });
});