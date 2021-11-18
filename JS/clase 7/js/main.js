// var animal = {
//     tipo: 'perro',
//     nombre: 'achi',
//     edad: '9',
//     medicamentos:[
//         'next',
//         'paracetamol',
//         'salbutamol',{
//             alergias:[
//                 'canicilina',
//                 'claritromicina'
//             ]
//         }
     
//     ]
// }

// console.table(animal)
    var right = 0;
    var topp = 0;

let main = document.getElementsByTagName('main')[0];

function position (direction){
    //console.log(direction)
    if (direction == 3) {
        right++;
        main.children[0].style.marginLeft =`${right}px`;
        console.log(right)
        console.log( main.children[0])
    }else if(direction == 0){
        right--;
        main.children[0].style.marginLeft =`${right}px`;
        console.log(right)

    }else if(direction == 1 ){
        topp--;
        main.children[0].style.marginTop =`${topp}px`;
        console.log( main.children[0])
    }else {
        topp++;
        main.children[0].style.marginTop =`${topp}px`;
        console.log(top) //top es una palabra reservada que no se tiene que usar como nombre de variable
        console.log(topp)

    }
}

// position()