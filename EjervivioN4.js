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