//Hamburger
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function ( ) {
	document.querySelector(".page-header").classList.toggle("nav-opened");
	document.querySelector(".page-header").classList.toggle("change");

}, false);


//Smooth Scroll jQuery

$(document).ready(function() {
$(".top-menu").click(function() {
    $('html, body').animate({
        scrollTop: $(".page-header").offset().top
    }, 2000);
      });
 $(".about-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
      });
  $(".work-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 2000);
      });
  $(".contact-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
      });
 }); 


//Show future

$(document).ready(function(){    
    $(".future-click").click(function(){
        $(".future-content li").toggle(1000);
    });
});