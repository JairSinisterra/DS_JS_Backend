// Saludar

function saludar() {
    console.log("Hola a todos, bienvenidos");

}
saludar();

function saludarA(nombre) {
    console.log("Hola, "+nombre);
}
saludarA("Luis");

// Funcion con retorno // Devuelven un resultado


function clasificar(prioridad){
    if (prioridad > 3){
        return "Urgente";
    }else{
        return "Normal";
    }
}

const resultado = clasificar(5);
console.log(resultado);