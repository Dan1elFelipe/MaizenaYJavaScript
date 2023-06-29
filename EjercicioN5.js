const rpm=[]
    console.log('Lista de usuarios activos');
    for(i=1;i<=3;i++){
        const Datos={
            nombre:prompt(`¿Cual es tu nombre?`),
            apellido:prompt(`¿Cual es tu apellido?`),
        };
        rpm.push(Datos);
       };
       console.table(rpm);