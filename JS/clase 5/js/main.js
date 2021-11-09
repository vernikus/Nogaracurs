console.log('lo que sea')

//Selecetores de js

//let parrafos = document.getElementsByTagName('p');
//console.log(parrafos[0])
//Se puede modificar el contenido con innerHTML
//parrafos[0].innerHTML = 'lo que sea'

//Cuando se pone innerText solo te regresa el texto de todoooo el contenedor
// let contenedor = document.getElementsByTagName('main')[0].innerText;
// console.log(contenedor)

//Se puede modificar el contenido con innerHTML
let body = document.getElementsByTagName('body')[0].innerHTML = `<main></main>`+'<div class="popup"><button onclick="cerrar()">X</button></div>';
let contenedor2 = document.getElementsByTagName('main')[0].innerHTML = `
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem adipisci optio unde soluta numquam non velit, odit vitae nemo tempora fugiat perspiciatis ipsum, magni illum earum architecto! Suscipit, soluta!</p>
</div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem adipisci optio unde soluta numquam non velit, odit vitae nemo tempora fugiat perspiciatis ipsum, magni illum earum architecto! Suscipit, soluta!</p>
</div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem adipisci optio unde soluta numquam non velit, odit vitae nemo tempora fugiat perspiciatis ipsum, magni illum earum architecto! Suscipit, soluta!</p>
</div>
<div><button onclick="funcioncita()">press here</button></div>
<div><button onclick="abrir()">modal</button></div>
`
function funcioncita(){
    document.getElementsByTagName('p')[0].innerHTML = `<h2>Titulo 2</h2>`; 
};

// function poopOp(){
//     document.getElementsByClassName('popup')[0].style.display ="block";
// }
function abrir(){
         document.getElementsByClassName('popup')[0].style.display ="block";
};
function cerrar(){
         document.getElementsByClassName('popup')[0].style.display ="none";
};
