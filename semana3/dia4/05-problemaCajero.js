/**
 * Dado un monto ingresado por el usuario 
 * calcular:
 * - billetes de 200
 * - billetes de 100
 * - billetes de 50
 * - billetes de 20
 * que el cajero debe entregar
 */

let monto = 1980;
let b200 = 0;
let b100 = 0;
let b50 = 0;
let b20 = 0;

b200 = (monto - (monto % 200)) / 200;
monto = monto - b200 * 200;
b100 = (monto - (monto % 100)) / 100;
monto = monto - b100 * 100;
b500 = (monto - (monto % 50)) / 50;
monto = monto - b50 * 50;
b200 = (monto - (monto % 20)) / 20;
monto = monto - b20 * 20;







console.log(monto);