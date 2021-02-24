//Cuando el documento este listo se va a ejecutar 
//todo el contenido que esté dentro de la función
//en general esto pasa usando $
//ejecuta lo que esta dentro del ready.
/*Sintaxis de JQuery
$(selector).accion();*/
$(document).ready(function(){
	$('h1').hide();
})

/*es lo mismo usar document que $(function(){
	
});*/