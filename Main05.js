const aprendices = []
const aprendiz1 = {
    nombre: "hola",
    materia: "ekisde",
}

const aprendiz2 = {
    nombre: "ola",
    materia: "ekisde",
}

const aprendiz3 = {
    nombre: "ño",
    materia: "ekisde",
}


// let resultado;

// resultado = [...aprendices, aprendiz1];
// resultado = [...resultado, aprendiz2 ];
// resultado = [aprendiz3, ...resultado];
// console.table(resultado);

aprendices.unshift(aprendiz3);
aprendices.push(aprendiz2);
aprendices.push(aprendiz1);


console.table(aprendices);