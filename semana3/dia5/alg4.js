alert(`El precio por hora es de 10 usd`)

let horas = +prompt("Indique las horas que utilizo del estacionamiento")
let precioHora = 10;
cobro = horas * precioHora;

console.log(`Usted debe ${cobro} usd`);