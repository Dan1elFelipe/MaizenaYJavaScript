// Definir una variable para almacenar el saldo inicial del jugador
var saldo = 100;

// Función para realizar una apuesta
function realizarApuesta(numeroApuesta, cantidad) {
  // Verificar si el número de apuesta y la cantidad son válidos
  if (numeroApuesta >= 1 && numeroApuesta <= 10 && cantidad <= saldo) {
    // Generar un número aleatorio del 1 al 10
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Verificar si la apuesta es ganadora
    if (numeroApuesta === numeroAleatorio) {
      saldo += cantidad; // Sumar la cantidad apostada al saldo del jugador
      console.log("¡Felicidades! Ganaste la apuesta. Tu nuevo saldo es: " + saldo);
    } else {
      saldo -= cantidad; // Restar la cantidad apostada del saldo del jugador
      console.log("Perdiste la apuesta. Tu nuevo saldo es: " + saldo);
    }
  } else {
    console.log("Apuesta inválida. Por favor, verifica tus datos.");
  }
}

// Ejemplo de uso:
realizarApuesta(8, 20); // Apostar 20 unidades al número 5



var numeroApuesta = parseInt(prompt("Ingresa un número de apuesta del 1 al 10:"));

var numeroAleatorio = Math.floor(Math.random() * 11);

    if (numeroApuesta >= 1 || numeroApuesta <= 10) {
    alert("Tu número de apuesta: " + numeroApuesta);
    console.log("Tu número de apuesta: " + numeroApuesta);
    alert("Número asignado al azar: " + numeroAleatorio);
    console.log("Número asignado al azar: " + numeroAleatorio);
    
    } else {
        alert("El número de apuesta ingresado no es válido.");
    console.log("El número de apuesta ingresado no es válido.");
    }
     