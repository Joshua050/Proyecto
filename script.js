
var btnAbrir = document.getElementById("btn-abrir");
var btnCerrar = document.getElementById("btn-cerrar");
var modal = document.getElementById("modal");

btnAbrir.addEventListener("click",()=>{
	modal.showModal();
})

btnCerrar.addEventListener("click",()=>{
	modal.close();
})

let correctasElec = [1,3,3,2,2,1];

let correctasMec = [2,1,2,1,1,];

let correctasCons = [3,2,1,3,3,];

let opcion_elegida = [];

let cantidad_correctas = 0;

let electronica = 0;
let mecanica = 0;
let construcciones = 0;
let contador = 0;
var boolean = 0;

function respuesta(num_pregunta, seleccionada){
	//contador ++;
	opcion_elegida[num_pregunta] = seleccionada.value;

	id= "p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgroundColor = "white";
	labels[5].style.backgroundColor = "white";
	labels[7].style.backgroundColor = "white";
	labels[9].style.backgroundColor = "white";

	seleccionada.parentNode.style.backgroundColor = "#cec0fc";
 
}

function corregir(){
	cantidad_correctasElec = 0;
	cantidad_correctasMec = 0;
	cantidad_correctasCons = 0;

	for (i=0; i <correctasElec.length; i++) {
		if (correctasElec[i]==opcion_elegida[i]) {
			cantidad_correctasElec++;
			contador ++;
		
		}
	}

	for (i=0; i <correctasMec.length; i++) {
		if (correctasMec[i]==opcion_elegida[i]) {
			cantidad_correctasMec++;
			contador ++;
		
		}
	}

	for (i=0; i <correctasCons.length; i++) {
		if (correctasCons[i]==opcion_elegida[i]) {
			cantidad_correctasCons++;
			contador ++;
			
		}
	}

	//////////////////////////
	electronica = [(100*cantidad_correctasElec)/6];
	mecanica = [(100*cantidad_correctasMec)/6];	
	construcciones = [(100*cantidad_correctasCons)/6];	  
	
electronica2 = Math.trunc(electronica);
mecanica2 = Math.trunc(mecanica);
construcciones2 = Math.trunc(construcciones);


	////////////////////////
	if(contador<6){
		
	boolean = 1;
	document.getElementById("resultadoFin").innerHTML = "Primero realiza todas las preguntas porfavor!";
	
		}








		  
if(boolean == 0){


	document.getElementById("resultado").innerHTML = electronica2;
	document.getElementById("resultado2").innerHTML = mecanica2;
	document.getElementById("resultado3").innerHTML = construcciones2;


	if(electronica > mecanica && electronica > construcciones ){

		document.getElementById("resultadoFin").innerHTML = "Electronica";
		
		
		}
	
		if(mecanica > electronica && mecanica > construcciones ){

			document.getElementById("resultadoFin").innerHTML = "Electro-Mecanica";
			
			}

			if(construcciones > electronica && construcciones > mecanica ){

				document.getElementById("resultadoFin").innerHTML = "Construcciones";
				
				}
			}
				
		
}


