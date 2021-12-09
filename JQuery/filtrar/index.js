$(document).ready(function(){

	//Obtener la primer caja y aplicarle
	//estilo css
	//$('.caja').first().css({background : '#000'})	
	
	//Obtener la ultima caja y aplicarle
	//estilo css
	//$('.caja').last().css({background : '#000'})

	//Obtener la i+1 esima caja y aplicarle
	//estilo css
	//$('.caja').eq(2).css({background: '#456'})

	//el filtro permite seleccionar y obtener muchas cajas a la vez
	//en cambio con eq solo podemos seleccionar una de manera vectorial
	//$('.caja').filter('#segunda').css({background: '#fff'})

	//Seleccionar todas las cajas menos las que tienen id segunda
	//$('.caja').not('#segunda').css({background: 'red'})

	//Eliminando elementos del DOM

	//eliminar elemento y sus hijos

	//$('#contenedor').remove();

	//eliminar solamente los elementos hijso
	
	//$('#contenedor').children('#segunda').remove();

	//$('#contenedor').empty()

	//Utilizando CSS con jquery

	$('#boton').on('click', function () {
		//$(this).addClass('estilo2');
		//$(this).removeClass('estilo1');
		//$(this).toggleClass('estilo1');
		
		//Esto no es recomendable, salvo que no tengamos el elemento
		//lo recomendable es tener las clases ya definidas.
		//$(this).css({
		//	'height' : '1000px'
		//})
	});

}
)