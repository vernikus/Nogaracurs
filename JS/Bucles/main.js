

//Para un for se necesitan declarar tres parametros (Variables)
// para usar un for se necesita decalarar una variable 
//Se pone una condicion
//Se aumenta o decrementa el contador
// for(let contador =0; contador < 5;contador++){
//     console.log(contador)
// };

//Bucles anidados

// for(let contador =1; contador <2;contador++){

//     for(i = 1; i<=10; i++){
//         document.write(`Hello world x${i} ${'<br>'}`)

//     }
// };


var niveles = prompt('¿cuantos niveles quieres que tenga tu piramide?');

for (i = 0; i < niveles; i++) {
   
    for (index = 0; index <= i; index++) {
        document.write(`♣`);
    }
    document.write('<br>');
};
