const usuario = {
    nombre: "daniel",
    dirreccion: "nosexd",
    telefono: "2558293",
    
}

const detalles = {
    ficha: "ladelpapu",
    quemiras: "este"    
}

const aprendices = {...usuario, ...detalles};
console.log(aprendices);
