// const numeros = [10, 20, 30, 40]
// console.log(numeros[0],numeros[3]);


//ciclo for
// const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabadp"]
// console.log(semana);

// for(let a = 0; a < semana; a++){
//     console.log(semana[a]);
// }


// const libros = ["la iliada", "la odiesea", "cien años de ojete", "machete con el diablo"]
// console.log(libros);


// libros[4] = "el mascapito";
// libros.push("el ojete");

// console.log(libros);





//                     Esta version es la primera para crear un Array con objetos adentro
// const usuario = [
//     {
//     nombre: prompt("Ingresa motero: "),
//     moto: prompt("Ingresa moto: "),
//     marca: prompt("ingresa marca: "),
//     },
//     {
//         nombre: prompt("Ingresa motero: "),
//         moto: prompt("Ingresa moto: "),
//         marca: prompt("ingresa marca: "),
//         },{
//             nombre: prompt("Ingresa motero: "),
//             moto: prompt("Ingresa moto: "),
//             marca: prompt("ingresa marca: "),
//             }
// ]

// console.table(usuario);




//                  Esta forma es la correcta de crear el array con objetos para no almacenar en cache
const usuario = [];

const Uuno = {
    nombre: prompt("ingresa tu nombre"),
    moto: prompt("ingresa moto:"),
    marca: prompt("ingresa la marca de tu moto: "),
}

const Udos = {
    nombre: prompt("ingresa tu nombre usuario 2: "),
    moto: prompt("ingresa moto2:"),
    marca: prompt("ingresa la marca de tu moto2: "),
}

const Utres = {
    nombre: prompt("ingresa tu nombre usuario 3: "),
    moto: prompt("ingresa moto3:"),
    marca: prompt("ingresa la marca de tu moto3: "),
}


usuario.unshift(Utres);
usuario.push(Udos);
usuario.push(Uuno);
console.table(usuario);