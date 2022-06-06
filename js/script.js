function actualizarReloj( ) {
	var d = new Date();
	var hora = d.toLocaleTimeString();
	document.getElementById("reloj").textContent = hora;
	setTimeout("actualizarReloj()", 1000);
}

async function APIBitcoin() {
	let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	let data = await response.text(); 
	var obj = JSON.parse(data);
	var precioBC = parseInt(parseFloat(String(obj.bpi.USD.rate).replace(",",""))*811.81);
	var xyValues = [
	  {x:50, y:7},
	  {x:60, y:8},
	  {x:70, y:8},
	  {x:80, y:9},
	  {x:90, y:9},
	  {x:100, y:9},
	  {x:110, y:10},
	  {x:120, y:11},
	  {x:130, y:14},
	  {x:140, y:14},
	  {x:150, y:15}
	];
	new Chart("myChart", {
	  type: "scatter",
	  data: {
	    datasets: [{
	      pointRadius: 4,
	      pointBackgroundColor: "rgba(0,0,255,1)",
	      data: xyValues
	    }]
	  }
	});
	document.getElementById("precioBC").textContent = 
		"Precio Bitcoin: $"+numberWithCommas(precioBC)+" clp";
	setTimeout("llamarAPI()", 60000);
}

async function APIFoto() {
	let response = await fetch('https://picsum.photos/800/300');
	let data = await response.blob(); 
	var imageObjectURL = URL.createObjectURL(data);
	var image = document.createElement('img');
	image.src = imageObjectURL;
	var container = document.getElementById("foto");
	container.append(image);
	setTimeout("llamarAPI()", 60000);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
