let lineas = {
    "noviss": 1000,
    "europa": 1500,
    "modena": 2000
};

let tasaInteres = 10;
let lineaSeleccionada = prompt("Seleccione una línea: Noviss, Europa o Modena").toLowerCase();
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));

// Verificar línea
if (lineaSeleccionada in lineas && !isNaN(cantidadCuotas) && cantidadCuotas > 0) {
    let valorLinea = lineas[lineaSeleccionada];
    let valorCuota = 0 ;

    if (cantidadCuotas === 1) {
         valorCuota = valorLinea;
    } 
    else {
        // Calcular el valor de cada cuota con el interes
        let valorInteres = valorLinea * (tasaInteres / 100);
        let valorTotal = valorLinea + valorInteres;
         valorCuota = valorTotal / cantidadCuotas;
    }

    alert("El valor de cada cuota para la " + lineaSeleccionada + " en " + cantidadCuotas + " cuotas es: " + valorCuota.toFixed(2));
} else {
    alert("Ingrese una línea válida y una cantidad de cuotas mayor a cero.");
}
