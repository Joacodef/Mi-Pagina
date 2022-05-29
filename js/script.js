function actualizarReloj( ) {
	var d = new Date();
	var hora = d.toLocaleTimeString();
	document.getElementById("reloj").textContent = hora;
	setTimeout("actualizarReloj()", 1000);
}