class Lineas {
    constructor(nombre, kgM, proveedor) {
        this.nombre = nombre;
        this.kgM = kgM;
        this.proveedor = proveedor;
    }

    calcularPrecioAbertura(anchoCm, altoCm) {
        const anchoM = anchoCm; // Convertir ancho a metros
        const altoM = altoCm; // Convertir alto a metros

        const pesoPorMetro = this.kgM * (anchoM + altoM) * 2; // Sumatoria de los cuatro lados en metros
        const pesoTotalGramos = pesoPorMetro / 100; // Convertir a gramos

        const precioKiloAluminio = 100; // Precio por kilo
        const costoTotal = (pesoTotalGramos / 1000) * precioKiloAluminio; // Convertir a kilos

        return costoTotal;
    }
}

const listaLineas = [];
let respuesta = 0;

while (respuesta !== -1) {
    respuesta = Number(prompt("1-Agregar Linea / 2-Mostrar Lineas / 3-Presupuestar / 4-Salir "));
    switch (respuesta) {
        case 1:
            listaLineas.push(agregar());
            break;
        case 2:
            mostrar(listaLineas);
            break;
        case 3:
            presupuestar(listaLineas);
            break;
        case 4:
            respuesta = -1;
            break;
        default:
            alert("Opción no válida.");
    }
}

function agregar() {
    let nombre = prompt("Ingrese la Línea: ");
    let kgM = Number(prompt("Ingrese su peso en gramos por metro: "));
    let proveedor = prompt("Ingrese el nombre del proveedor: ");

    return new Lineas(nombre, kgM, proveedor);
}

function mostrar(listaLineas) {
    for (let i = 0; i < listaLineas.length; i++) {
        alert("Producto: " + listaLineas[i].nombre +
            "\nPeso por kilo: " + listaLineas[i].kgM +
            "\nProveedor: " + listaLineas[i].proveedor);
    }
}
  

  function presupuestar(listaLineas) {
    const nombreLinea = prompt("Ingrese el nombre de la línea: ").toLowerCase(); // Convertir a minúsculas

    const lineaSeleccionada = listaLineas.find(linea => linea.nombre.toLowerCase() === nombreLinea);

    if (lineaSeleccionada) {
        const ancho = Number(prompt("Ingrese el ancho de la abertura en cm: "));
        const alto = Number(prompt("Ingrese el alto de la abertura en cm: "));
        const costoAbertura = lineaSeleccionada.calcularPrecioAbertura(ancho, alto);
        alert(`El costo de la abertura es: $${costoAbertura}`);
    } else {
        alert("No se encontró la línea ingresada.");
    }
}


