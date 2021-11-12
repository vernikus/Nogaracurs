//Ingresa numeros positivos y negativos, verifica cuales sean negativos y al final muestra cuantos son negativos

let  collection = prompt('¿Cúantos numeros totales intriducira?');

if ( Math.sign(collection) == -1 || collection == '' || collection == 0) {
    console.error('No puede introducir un valor negativo o vacio');
}else{
    let negativo = 0;
    for(let index = 1; index <= collection ; index++){
        let numero = prompt('Ingrese el numero');
        console.log(`El numero ${index} es ${numero}`)
        
        if (Math.sign(numero) == -1) {
            negativo++;
        }
    };
    console.log(`Ha escrito ${negativo} numeros negativos`)
};
