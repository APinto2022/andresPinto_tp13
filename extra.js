
//1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function losDiezSiguientes(numero){
    for (let i = 1; i <=10; i++) {
       console.log(numero+i)   
    }
}
//losDiezSiguientes(15);

//2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
for(let i=1; i<57; i+=3){
    console.log(i)
}

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
function sumatoriaEntreCeroyCien(){
    let sumatoria=0;
    for(let i=0; i<100;i++){
        sumatoria+=i;
    }
    console.log(sumatoria);
}

//Crear una función que reciba por parámetro una cadena de texto: ‘practicando el
//uso de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada
//una de las letras de la cadena de texto pero en MAYÚSCULA.

function mostrarEnMayuscula(cadena){
    for(let i=0;i< cadena.length; i++){
        console.log(cadena[i].toUpperCase())
    }
}
//mostrarEnMayuscula("andres");

//Crear una función que reciba como parámetro un array de números positivos.
//Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares
//let numerosPositivos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22];
function devuelveArregloDePares(arreglo){
    let arrDePares=[];
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]%2==0){
            arrDePares.push(arreglo[i]);
        }
    }return arrDePares;
}

//console.log(devuelveArregloDePares(numerosPositivos));

module.exports = {
    losDiezSiguientes,
    sumatoriaEntreCeroyCien,
    mostrarEnMayuscula,
    devuelveArregloDePares
    }