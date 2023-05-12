// function ekisde(){//defino la funcion multiplicar
//     console.log 
// }
// ekisde();//realizao la invocacion para que esta pueda ser ejecutada


// function sumar(a, b){
//     console.log("este es el resultado de la suma: ", a + b);
// }

// a = parseInt(prompt("ingresa numero 1: ", 0));
// b = parseInt(prompt("ingresa numero 2: ", 0));

// sumar(a, b);

function usuario(nombre, apellido, ciudad){
    console.log(`Bienvenido a la sesion ${nombre} con apellido ${apellido}, te estamos viendo desde la ciudad ${ciudad}` )
}

nombre = prompt("ingresa nombre: ");
apellido = prompt("ingresa apellido: ");
ciudad = prompt("Ingresa tu ciudad: ");

usuario(nombre, apellido, ciudad);

