//Elegir dos numeros como rango, los numeros que se encuentren en medio del rango regresar como salida si son pares o impares

let startRange = prompt("Ingrese el numero que quiere como inicio del rango")
let endRange = prompt("Ingrese el numero que quiere como final del rango")

for(let index = startRange; index <= endRange; index++){
    // if((index%2) == 0){
    //     console.log(`${index} = es un numero par`);
    // }else{
    //     console.log(`${index} = es un numero impar`);
    // }

    index % 2 == 0? console.log(`${index} = es un numero par`):console.log(`${index} = es un numero impar`);
}