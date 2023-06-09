//hacer una factura con prompt y alert
alert("bienvenido a la tienda del sena");
let NombreU = prompt("Ingresa tu nombre:", );
let NameProducto = prompt("Ingrese el nombre del producto: ");
let precioProducto = parseInt(prompt("Ingrese el precio del producto: ", 0));

let NameProducto2 = prompt("ingresa el nombre del producto 2: ");
let precioProducto2 = parseInt(prompt("ingresa el precio del producto numero2: "));

let NameProducto3 = prompt("ingresa el nombre del producto numero3: ");
let precioProducto3 = parseInt(prompt("ingresa el precio del producto numero3: "));

console.log( NameProducto, precioProducto);
console.log( NameProducto2, precioProducto2);
console.log( NameProducto3, precioProducto3);

let SubTotal = (precioProducto + precioProducto2 + precioProducto3);
console.log(`el sub total es: ${SubTotal}`);

let iva = SubTotal * 0.19;
console.log(`el iva es: ${iva}`);

let descuento = SubTotal * 0.10;
console.log(`el descuento es: ${descuento}`);

let Total = (SubTotal + iva) - descuento;
console.log (`el total de la factura es ${Total}`);


