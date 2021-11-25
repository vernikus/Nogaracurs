// let main = document.getElementsByTagName('main')[0];
// let screen = document.getElementsByClassName('screen')[0]
//let p = screen.children[0];
// const pulsar = (parametro) => {
//     let screen = document.getElementsByClassName('screen')[0]
//     if (parametro <= 10) {
//         let dato = screen.children[0].innerHTML = parametro;
//         cifra.push(parametro);

//         console.log(cifra);

//         dato = screen.children[0].innerHTML = cifra.join('');
//         return cifra
//     } else {
//         (function (parametro,cifra) {
//             if (parametro == 'reset') {
//                 cifra = cifra.splice(0,-1)
//                 screen = screen.children[0].innerHTML = cifra
//                 console.log(cifra)

//             }
//         }(parametro,cifra))
//     }

// };

//console.log(cifra)
// function numeros (parametro){
//     let cifra = [];
//     let p = screen.children[0];
//     if (parametro <=10) {
//         cifra.push(parametro);
//         p.innerHTML = cifra.join('')
//         console.log(cifra);

//     };
//     addition(parametro,cifra,p)
// };

// function addition (parametro,cifra,p){
//     if (parametro == 'addition') {
//         console.log(cifra)
//         p.innerHTML = `${cifra} +`
//     }
// }

let main = document.getElementsByTagName('main')[0];
let screen = document.getElementsByClassName('screen')[0]
let p = screen.children[0];
let result = '';
let contador = 0;
let cifra = '';

function numeros(parametro) {
    if (result === '0') {
        result = ''
    }
    result = `${result}${parametro}`
    p.innerHTML = result
};

function reset() {
    result = '0';
    cifra = null;
    p.innerHTML = result;
}

function borrar() {
    
    
    if (result.length == 1) {
        result = 0
    } else {
        result = result.slice(0, -1)
        console.log(result)
    }
    p.innerHTML = result

}

function addition() {

    result = parseFloat(result);

    if (contador == 0) {
        cifra = result
        // p.innerHTML = cifra;
    } else {
        cifra = cifra + result;
        //console.log(cifra)
    }

    p.innerHTML = cifra;
    result = '0'

    contador++
    //console.log('cliks ' + contador)
};
