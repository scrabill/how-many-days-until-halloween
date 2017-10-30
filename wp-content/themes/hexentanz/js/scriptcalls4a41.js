(function($) {
"use strict";
//scroll smoothly
$(document).ready(function(){
$(".scroll").click(function(event){
//prevent the default action for the click event
event.preventDefault();		
//get the full url - like mysitecom/index.htm#home
var full_url = this.href;	
//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
var parts = full_url.split("#");
var trgt = parts[1];	
//get the top offset of the target anchor
var target_offset = $("#"+trgt).offset();
var target_top = target_offset.top;	
//go to that anchor by setting the body scroll top to anchor top
$('html, body').animate({scrollTop:target_top}, 500);
});
});


//Drag cards
$(document).ready(function() {
$('.drag')
.drag(function( ev, dd ){
$( this ).css({
top: dd.offsetY,
left: dd.offsetX
});
},{ relative:true });
});


//Sound on hover
$(document).ready(function(){
var beepOne = $("#sound")[0];
$(".bell")
.mouseenter(function() {
beepOne.play();
});
});


//Triggering panel for navigation
$(document).ready(function(){
$(".slidemenu").click(function(){
$(".slide-panel").slideToggle("slow");
$(this).toggleClass("active");
return false;
});
});


//Triggering panel for navigation
$(document).ready(function(){
$(".mobmenu").click(function(){
$(".mob-panel").slideToggle("slow");
$(this).toggleClass("active");
return false;
});
});



//Toggle
$(document).ready(function(){
//Hide (Collapse) the toggle containers on load
$(".toggle-container").hide(); 
//Switch the "Open" and "Close" state per click
$("div.trigger").toggle(function(){
$(this).addClass("active");
}, function () {
$(this).removeClass("active");
});
//Slide up and down on click
$("div.trigger").click(function(){
$(this).next(".toggle-container").slideToggle("slow");
});
});



//Accordion
$(document).ready(function(){
$(".accordion h3:first").addClass("active");
$(".accordion p").hide();
$(".accordion h3").click(function(){
$(this).next("p").slideToggle("slow")
.siblings("p:visible").slideUp("slow");
$(this).toggleClass("active");
$(this).siblings("h3").removeClass("active");
});
}); 

//Add class to post table
$(document).ready(function(){
$('.tpost table').addClass('ttable');
});	


//PrettyPhoto
$(document).ready(function(){
$('.gallery a').has('img').addClass('prettyPhoto');
$("a[class^='prettyPhoto']").prettyPhoto();
});

//Masonry
$(document).ready(function() {
$('.gallery').masonry({
columnWidth: 3,
singleMode: true,
isAnimated: true,
itemSelector: '.gallery .gallery-item'
}).imagesLoaded(function() {
$('.gallery').masonry('reload');
});
});


})( jQuery, window, document );