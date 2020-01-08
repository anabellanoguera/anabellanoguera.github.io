// JavaScript Document

$(window).scroll(function(){
	
	if ($(".animacion-4").visible(true)) {
		$(".animacion-4").addClass("visible");
	} 
	else {
		$(".animacion-4").removeClass("visible");
	}
	if ($(".ultimo").visible(true)) {
		$(".recomendados").addClass("visible");
	} 

	
	
	if ($(".animacion-7").visible(true)) {
		$(".animacion-7").addClass("visible");
	} 
	else {
		$(".animacion-7").removeClass("visible");
	}
	
	if ($("#cero").visible(true)) {
		$(".caja0").addClass("visible")
	}
	else{
		$(".caja0").removeClass("visible");
	}
	
		if ($("#contacto").visible(true)) {
		$(".cajacontacto").addClass("visible")
	}
	else{
		$(".cajacontacto").removeClass("visible");
	}
	
	if ($("#uno").visible(true)) {
		$(".caja1").addClass("visible")
	}
	else{
		$(".caja1").removeClass("visible");
	}
	
		if ($("#dos").visible(true)) {
		$(".caja2").addClass("visible")
	}
	else{
		$(".caja2").removeClass("visible");
	}
	
		if ($("#tres").visible(true)) {
		$(".caja3").addClass("visible")
	}
	else{
		$(".caja3").removeClass("visible");
	}
	
		if ($("#cuatro").visible(true)) {
		$(".caja4").addClass("visible")
	}
	else{
		$(".caja4").removeClass("visible");
	}
	
		if ($("#work").visible(true)) {
		$(".cajawork").addClass("visible")
	}
	else{
		$(".cajawork").removeClass("visible");
	}
	
		if ($("#cinco").visible(true)) {
		$(".caja5").addClass("visible")
	}
	else{
		$(".caja5").removeClass("visible");
	}
	
        if (  $("#s1").visible(true)  ) {
                $("#progress").addClass("width-25");
        }
        else {
                $("#progress").removeClass("width-25");
        }        
        
        
        if (  $("#s2").visible(true)  ) {
                $("#progress").addClass("width-50");
        }
        else {
                $("#progress").removeClass("width-50");
        }    
	
		        if (  $("#s3").visible(true)  ) {
                $("#progress").addClass("width-75");
        }
        else {
                $("#progress").removeClass("width-75");
        }  
	
		if (  $("#s4").visible(true)  ) {
                $("#progress").addClass("width-100");
        }
        else {
                $("#progress").removeClass("width-100");
        }  
	
		
	
});

		$("#card1 .card-header") .click( function() {
		$(".card-body").slideToggle(500);
});

	



	