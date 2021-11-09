// let lenguaje = prompt('Para permanecer en la academia de NogaraDev Code, cúal es el lengueje de programacion predilecto por él CEO de este mismo');

// if (lenguaje === 'Java Scrip'){
//     console.log('Eres digno de seguir estudiando con los demas');
// }else {
//     console.log('uy no, vas pa fuera');
// };

let  oreo =1.90,kitKat = 1, brownie = 0.75, mym = .95, priceIce =1.90, sentence = 'JavaScrip'
alert('Bienvenido a tal heladeria?')
let numIce = prompt('Cuantos helados seran?') ,iceTopping = prompt('Cuales seran los topping que desea agregar?'), discount = prompt('Conoce la frase de descuento del mes?')

if (numIce !='' || iceTopping != '' || discount != '') {
    let total = numIce * priceIce 
    
    if(iceTopping == 'oreo' && discount == sentence){
        console.log(`su total es de ${total+= oreo -1}$`)
    }else if((iceTopping == 'oreo' && discount== 'no') || (iceTopping == 'oreo' && discount != sentence) ){
        console.log(`su total es de ${total+oreo} sin descuento porque esa no es la frase`)
    }
    if(iceTopping == 'kitkat' && discount == sentence){
        console.log(`su total es de ${total+= kitKat -1}$`)
    }else if((iceTopping == 'kitkat' && discount== 'no') || (iceTopping == 'kitkat' && discount != sentence) ){
        console.log(`su total es de ${total+kitKat} sin descuento porque esa no es la frase`)
    }
    if(iceTopping =='brownie' && discount == sentence){
        console.log(`su total es de ${total+= brownie -1}$`)
    }else if((iceTopping == 'brownie' && discount== 'no') || (iceTopping == 'brownie' && discount != sentence) ){
        console.log(`su total es de ${total+brownie} sin descuento porque esa no es la frase`)  
    } 
    if(iceTopping== 'mym' && discount == sentence ){
        console.log(`su total es de ${total+= mym -1}$`)
    }else if((iceTopping == 'mym' && discount== 'no') || (iceTopping == 'mym' && discount != sentence) ){
        console.log(`su total es de ${total+mym} sin descuento porque esa no es la frase`)
    }
}else{
    console.log('Va a pedir algo o se me va a quedar viendo como pendejo')
}
