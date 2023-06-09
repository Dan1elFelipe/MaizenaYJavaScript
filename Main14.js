const usuario = false;
const puedoPagar = true;

if (usuario){
    console.log("si este es el usuario")
} else{
    console.log ("no este no es el usuario")
}

if (usuario || puedoPagar){
    console.log("el usuario puede comprar")
} else{
    console.log("el usuario no puede comprar")
}



let us = prompt("ingresa tu fecha de nacimiento: ", 0)

if (us >= 18){
    console.log("eres mayo de edad");
} else {
    console.log("no eres mayor de edad");
}
