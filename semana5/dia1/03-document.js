const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.style.color = "tomato";
titulo.style.fontSize ="3rem";
const seccion1 = document.getElementById("seccion1")
const anchoSeccion1 = seccion1.offsetWidth;
const altoSeccion1 = seccion1.offsetHeight;
console.log(`Ancho de seccion1: ${anchoSeccion1}px`);
console.log(`alto de seccion1: ${altoSeccion1}px`);

const parrafo = document.getElementById("parrafo");
console.log("Contenido HTML del parrafo");
console.log(parrafo.innerHTML);
console.log("Contenido  textual del parrafo");