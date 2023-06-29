let saldo = 5000;
let aleatorio = Math.floor(Math.random() * 11); 

while (saldo > 0 || valor > 0){
    let numero = parseInt(prompt("que numero quieres apostar"));
    let valor = parseInt(prompt("que quieres apostar care chimba: "));
    alert (`ha salido el numero ${aleatorio}`)
    
    if (numero == aleatorio){
        saldo = saldo + valor* 3;
        alert(`has ganado ${saldo}`);
    } else {
        saldo = saldo - valor;
        alert(`has perdido ${valor}, ahora tienes ${saldo}`);
    } if (saldo == 0){
        alert ("bobo ijueputa");
        break;
    } if (saldo >= 10000){
        alert ("has ganado el juego");
        break;
    }
}