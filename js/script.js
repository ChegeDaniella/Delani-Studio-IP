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
    // $(".img1").hover(function(){
    //     $(this).css('opacity','.4');
        
    // });
    $('.img1').mouseover(function(){
        $(this).css('opacity','.2');
    }).mouseout(function(){
        $(this).css('opacity','1');
    })});