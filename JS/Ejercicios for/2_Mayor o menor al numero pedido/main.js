//Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y muestre un mensaje cada vez que un número no sea mayor que el primero.

let rango = prompt("Cuantos numeros comparara?")


if (Math.sign(rango) ==-1 || rango == 0 || rango == "") {
    console.error('El numero no puede ser negativo, o ir vacio');
    
}else {
    let comparacion = prompt('Elija el numero que serivra como referencia para las comparaciones')
    for(let index = 1; index <=rango ;index++){
        let numero = prompt(`Escriba un numero mayor a ${comparacion}`);
        if (numero > comparacion) {
            console.log(`${numero} es mayor que ${comparacion}`);
        }else console.error(`${numero} no es mayor que ${comparacion} `);
    }
}
//Comprobacion de si un numero es positivo o negativo
// if(Math.sign(num) !== -1 ){

// } 
     