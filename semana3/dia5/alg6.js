let primerCateto = +prompt("Ingrese el valor del cateto A")
let segundoCateto = +prompt("Ingrese el valor del cateto B")

var catetoA = Math.pow(primerCateto, 2);
var catetoB = Math.pow(segundoCateto, 2);
cateto = catetoA + catetoB;
hipotenusa = Math.sqrt(cateto);

console.log(`El valor del cateto es ${hipotenusa}`);