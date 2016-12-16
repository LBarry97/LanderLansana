var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var fuel=500;

window.onload = function(){//Cuando carga:

    document.getElementById("showm").onclick = function () {//Al hacer cilck en "Menu":
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	
	document.getElementById("atras").onclick = function () {//Al hacer cilck en "Atras":
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	
	// Al hacer click en "Instrucciones":
	document.getElementById("instrucciones").onclick = function () {
		document.getElementsByClassName("comojugar")[0].style.display = "block";
		stop();
	}
	
	// Al hacer click en "Autor":
	document.getElementById("autor").onclick = function () {
		document.getElementsByClassName("sobre")[0].style.display = "block";
		stop();
	}
	
	//Cuando ago cilck en "Atras" en las "Instrucciones":
	document.getElementById("atras1").onclick = function () {
		document.getElementsByClassName("comojugar")[0].style.display = "none";
		start();
	}
	
	//Cuando ago cilck en "Atras" en las "Instrucciones":
	document.getElementById("atras2").onclick = function () {
		document.getElementsByClassName("sobre")[0].style.display = "none";
		start();
	}
	
	// Empezar a mover nave
	start();
	
	// El boton potencia
	document.getElementById("potencia").onmousedown=naveOn;
	document.getElementById("potencia").onmouseup=naveOff;
	
	
	
}

function start(){// Declaracion del bucle:
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){// Finalizacion del bucle:
	clearInterval(timer);
}

function moverNave(){
	// Contador de velocidad:
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	
	// Contador de altura:
	y +=v*dt;
	document.getElementById("altura").innerHTML=y.toFixed(2);
	
	// Contador de fuel:
	if(a==-g){
		fuel--;
	}
	
	// Mover nave:
	if (y<79){ 
		document.getElementById("nave").style.top = y+"%";
	} else { 
		stop();
		navesplota();
	}
	
	// Actualizar fuel
	document.getElementById("rojo").style.width= (fuel/500*100)+ "%";
}

function naveOn(){// Motor en marcha:
	a=-g;
	document.getElementById("imgnave").src="img/cohetellama.png";
	document.getElementById("potencia").src="img/potencia2.png";
}

function naveOff(){// Motor parado:
	a=g;
	document.getElementById("imgnave").src="img/cohete.png";
	document.getElementById("potencia").src="img/potencia.png";
}
// Nave esplota:
function navesplota(){
	if(v>3.00){
		document.getElementById("imgnave").src="img/boom.gif";
	}
}