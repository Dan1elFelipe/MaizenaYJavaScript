/*const dinero = 10000;
const facTotal = 20000;
const tarjeta = false;
const tarCredito = false; 
const cheque = true;

if (dinero >= facTotal){
    console.log("el dinero si te alcanza");
} else if (tarjeta){
    console.log ("puedo pagar porque tengo tarjeta");
} else if (tarCredito){
    console.log("puedo pagar porque tengo tarjeta de credito");
} else if (cheque){
    console.log("puedo pagar con el cheque");
} else {
    console.log("no es suficiente");
}*/


const metodoPago = "tarjeta de credito";

    switch(metodoPago) {
        case "efectivo":
            console.log(`el pago fue realizado con ${metodoPago}`);
            break;
        
        case "cheque":
            console.log(`el pago fue realizado con ${metodoPago}`);
            break;

        case "tarjeta":
            console.log(`el pago fue realizado con ${metodoPago}`);
            break;

        case "tarjeta de credito":
            console.log(`el pago fue realizado con ${metodoPago}`);
            pagar();
            break;
        default:
            console.log("no has seleccionado un metodo de pago o no esta soportado");
            break;
    }

    function pagar (){
        console.log(`te encuentras pagando con${metodoPago}`);
    }