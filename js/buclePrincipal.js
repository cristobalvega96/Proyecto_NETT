//Namespace = Espacio de nombres 
//main loop = Bucle principal
//aps = Actualizaciones por segundo
//fps = Frames ó Cuadros por segundo 
//callback

var buclePrincipal = {
		idEjecucion: null,
		ultimoRegistro: 0,
		aps: 0,
		fps: 0,
		iterar: function(registroTemporal){
			buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar); //<---RECURSIVIDAD
		},//Iterar
		detener: function(){

		},//Detener
		actualizar: function(registroTemporal){

		},//Actualizar
		dibujar: function(registroTemporal){

		}//Dibujar
};