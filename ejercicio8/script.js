// JavaScript Document


$('.fa-facebook').hover( function() {
	$('.fa-facebook').addClass('fa-rotate-90');
},
function() {
	$('.fa-facebook').removeClass('fa-rotate-90');
}); 


$(window).scroll(function(){
	
	if ($("#cuadrado").visible(true)) {
		$("#cuadrado").addClass("visible");
	} 
	else {
		$("#cuadrado").removeClass("visible");
	}
	     	
});


