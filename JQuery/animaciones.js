$(document).ready(function(){

	//$(selector).animate({parametro1,parametro2,...}, velocidad, callback);
	$('#boton').on('click', function(){
		$('#caja').animate({
			//no lleva punto y coma! es objeto!
			//width: '300px'//,
			//opacity: '0.2'
			//incrementamos 300 px mas de los que ya tenia
			//width: '+=300px'

			//no se usa el - aca va en mayuscula
			marginLeft: '+=50px'
			//las animaciones de color no funcionan
			//no son soportadas por jquery
			//podemos combinar jquery y css 
		}, 300, function(){
			//alert("Fin de la animacion")
		});

		//Mezclar jquery y css


		//$('.caja').toggleClass('animacion');
		$('.caja').animate({
			marginLeft: '-=50px'
		}, 300);
		//Cuando termine la primera se aplicara la segunda :)
	});

});