$(document).ready(function(){
	//cuando el usuario haga click en el boton se ejecutara
	//una funcion o callback
	var boton = $('#boton'); 
	var botonDesactivar = $('#desactivar');
	var a = $('a');

/*
	$('#boton').click(function(){
		alert('Hola')
	});
*/
/*
	function saludo(){
		alert('Saludos');
	}

	boton.click(saludo);

	//evento,funcion
	boton.on('click', saludo);

	//Fallback

	//si el usuario pone el mouse arriba es mouse enter

	boton.on('mouseenter', function(){
		//esta funcion anonima se llama fallback
		document.body.style.background = '#000';
	})

		//mouseleave es el evento cuando el mouse
		//deja el boton
	boton.on('mouseleave', function(){
		document.body.style.background='#fff';
	})
*/
	//Eliminando eventos

	boton.on('click', function(){
		alert('Saludos');
	});

	botonDesactivar.on('click', function(){
		//permite desactivar el evento pasado por parametro
		boton.off('click');	
		console.log('se ah desactivado')
	});

	//Como prevenir el comportamiento de los enlaces.

	a.on('click', function(e){
		e.preventDefault();
		alert('link desactivado')
	})

});