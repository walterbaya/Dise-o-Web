$(document).ready(function(){
	var contenedor = $('#contenedor');
	var contador = 1;

	$('#agregar').on('click', function(){
		//Creamos un div
		var caja = $('<div></div>').attr('class', 'caja').text(contador);
		contador++;
		//Agrega la caja al principio
		//contenedor.append(caja);
		//Agrega la caja al final
		//contenedor.prepend(caja);

		//agregamos la caja antes del contenedor
		//contenedor.before(caja)
		//agregamos la caja despues del contenedor
		//contenedor.after(caja)
	});
});