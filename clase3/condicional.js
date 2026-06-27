// if (condition){ bloque de accion}

const prioridad = 5;

if (prioridad > 6){
    console.log(" It's urgent!");
}else{
    console.log("No es urgente!");
};

const age = 13;

if (age >= 18){
    console.log("Es un adulto");
}else if(age >= 13){
    console.log("Es un adolescente");
}else{
    console.log("No la hemos cuadrado");
}

// verdadero o falso. si es false, 0, texto vacio, null, undeifined, NaN, seria falso

const titulo = "";

if (titulo) {
  console.log("La tarea tiene título");
} else {
  console.log("Falta el título");   // ← entra aquí: "" es falsy
}