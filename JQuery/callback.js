//callback funciones que se ejecutan despues de que una animacion
//se halla terminado, o luego de finalizar una carga o algo asi,
$(document).ready(function(){
	$('#ejecutar').on('click', function(){
		$('.caja').slideUp(1000, function(){
			$(this).slideDown(1000);
		});
	});
});