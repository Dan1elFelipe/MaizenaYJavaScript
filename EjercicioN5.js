let media, nota1, nota2, nota3, calificacion; 
nota1 = parseFloat(prompt("primer trimeste"));
nota2 = parseFloat(prompt("sagundo trimestre"));
nota3 = parseFloat(prompt("tercer trimestre"));

media = (nota1 + nota2 + nota3)/ 3;
if (media < 2.9) {
    calificacion = "aun no aprueba";
} else if (media >= 3 && media <= 4.5){
    calificacion = "Aprobado";
} else if (media >= 4.6){
    calificacion = "excelente";
} {alert ("calificacion media: " + calificacion)};



/*const edad = 17;
if(edad == 18 ){
    console.log(`eres mayo de erdad ${edad}`);
    } else{
        console.log(`eres menor de edad`);
        }*/