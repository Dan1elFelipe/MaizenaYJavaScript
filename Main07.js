// const libros = [
//     {nombre: "la iliada", precio: 80000, pasta:"dura"},
//     {nombre: "la biblia", precio: 80000, pasta:"dura"},
//     {nombre: "los huevos", precio: 80000, pasta:"dura"},
//     {nombre: "del papau", precio: 80000, pasta:"dura"},
//     {nombre: "pueden ser", precio: 80000, pasta:"dura"},
//     {nombre: "bastante", precio: 80000, pasta:"dura"},
//     {nombre: "loscuros", precio: 80000, pasta:"dura"},
// ];

// console.log(libros);

// // for(let i=0; i < libros.length; i++)
// //     {
// //         console.log(libros[i].nombre);
// //     }
// // console.log(libros);

// libros.forEach(function(libreria){
//     console.table(`tipo de libro ${libreria.nombre} - precio ${libreria.precio} - tipo pasta${libreria.pasta}`);
// });



const pajero= [];

for (let a= 0; a<=2; a++)
{
    let usuario = {
        nombre: prompt("ingresa tu nombre: "),
        apellido: prompt("ingresa tu apellido: "),
        moto: prompt("igresa tu moto"),
        placa: prompt("ingresa la placa de la moto: "),
    }
    pajero.push(usuario);
}

console.table(pajero);





