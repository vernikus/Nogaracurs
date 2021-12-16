//Tipos de for

const fruist = ['apple', 'grape', 'banana', 'melon', 'watermelon', 'tangerine'];

for (let index of fruist) {
    console.log(index)
}

let nombre = 'jonathan enriquez lucas'
for (let index of nombre) {
    console.log(index);
}

const fruist2 = {
    fruit1:'apple',
    fruit2:'grape',
    fruit3:'banana',
    fruit4:'melon',
    fruit5:'watermelon',
    fruit6:'tangerine'};
//For in es para los objetos
for(let iterator in fruist2){
    //Asi es para que se acceda a la propiedad de las llaves
    console.log(fruist2[iterator])
}


