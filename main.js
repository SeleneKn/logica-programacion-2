let gradosIngresados = Number(prompt("Ingresa grados Celsius"));

     if(isNaN(gradosIngresados)){
	alert("Solo se aceptan números, ingresa uno.")
     }
     let Kelvin = gradosIngresados + 273.15
     let Fahrenheit = (gradosIngresados * 1.8) +32

console.log("La conversión de " + gradosIngresados + " Celsius a Kelvin es: " + Kelvin + " y a grados Fahrenheit es: " + Fahrenheit );
