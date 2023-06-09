//notas sena
alert ("Sistema de calificaciones del sena ")
let aprendiz = prompt("ingresa tu nombre de aprendiz: ");
let ntAprendiz1 = parseInt(prompt(`ingresa tu N1 nota ${aprendiz}: `, 0));
let ntAprendiz2 = parseInt(prompt(`ingresa tu N2 nota ${aprendiz}: `, 0));
let ntAprendiz3 = parseInt(prompt(`ingresa tu N3 nota ${aprendiz}: `, 0));

ponderado1 = (ntAprendiz1 * 0.20);
console.log(ponderado1);

ponderado2 = (ntAprendiz2 * 0.20);
console.log(ponderado2);

ponderado3 = (ntAprendiz3 * 0.60);
console.log(ponderado3);

NotaFinal = (ponderado1 + ponderado2 + ponderado3); 
console.log(`la nota final del aprendiz ${aprendiz} es: ${NotaFinal}`);












