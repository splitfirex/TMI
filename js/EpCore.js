var core = {
	listadoRutas : {},
	listadoEpub : {},
	listadoMp3 : {},
	epubActual : "",
	epubBook : "",
	agregarEpub : function(f,ruta) {
		cargarFichero(f,ruta);
	},
	mostrarLibro : function(){
		mostrarContenidoLibro();
	}
}

