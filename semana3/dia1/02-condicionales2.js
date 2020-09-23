let peso = +prompt("Ingrese su peso en kilogramos");
let altura = +prompt("Ingrese su altura en metros");
const imc = peso / (altura * altura);

console.log(imc);
if (imc <= 15) {
    console.log("El paciente presenta delgadez 👀");
} else {
    if (imc > 25) {
        console.log("El paciente presenta sobrepeso 🐷");
    } else {
        console.log("El paciente presenta un peso ideal 😎");
    }
}