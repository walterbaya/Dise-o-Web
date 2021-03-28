$(document).ready(function(){
	$('#ejecutar').on('click', function(){
		$('.caja').animate({
			marginLeft: '500px'
		}, 5000);
		$('.caja').animate({
			marginLeft: '0px'
		}, 5000);
	});
	$('#parar').on('click', function(){
		//stop(limpiarAnimaciones, SaltarAlFinal)
		//de esta forma limpia de a una, pero si pongo
		//limpiar animaciones limpia todas de una
		//para todo
		$('.caja').stop(true,false);
	});
});