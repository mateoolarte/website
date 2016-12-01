$(document).ready(function() {

	StackMob.init({
    appName: "ecoactuar",
    clientSubdomain: "mateoolarte8gmailcom",
    publicKey: "b7db71d3-2ff2-4b9f-9e94-b21653d6c9fe",
    apiVersion: 0
	});
  var reports = StackMob.Model.extend({ schemaName: 'reports' });
   
  $('#enviar').click(function(e) {
    e.preventDefault();

		var titulo = $("#titulo").val();
		var descripcion = $("#descripcion").val();
		var seleccion = $("#seleccion").val();
		var latitud = $('#latitud').val();
		var longitud = $('#longitud').val();
        
    var latlon = new StackMob.GeoPoint(parseFloat(latitud), parseFloat(longitud));
    var entry = new reports({ title: titulo, description: descripcion, selection: seleccion, location: latlon.toJSON() });
    
    entry.create({
        success: function(model) {
            console.log(model);
        }, 
    });

    alert("Reporte Enviado");
  });
});