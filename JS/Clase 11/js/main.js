/*let div = document.getElementsByTagName('div')[0]
let widthDiv = 100;
function pantalla (){
    
    //Altura y ancho de la ventana
    let widthPantalla = window.innerWidth
    let heigthPantalla = window.innerHeight
    //document.write('Tolon tolon')
    widthDiv++;
    div.style.width = widthDiv+'px'
    console.log(widthPantalla)
    console.log(heigthPantalla)
}
//onresize es el evento que hace que algo cambie cuando la ventana camia de tamaño
// window.onresize = pantalla;*/

let divOne = document.getElementById('container1')
let divTwo = document.getElementById('container2')
let divThree = document.getElementById('container3')
let imagen = document.getElementById('imagen')
let imagen2 = document.getElementById('imagen2')
//Ponemos el evento draggable en true
imagen.draggable = true;
imagen2.draggable = true;
//dragover se dispara cuando el elemneto se ponde sobre el contenedor
divOne.addEventListener('dragover', (event) => {
    event.preventDefault();
})
divOne.addEventListener('drop', (event) => {
    //event.preventDefault()
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
})
divTwo.addEventListener('dragover', (event) => {
    event.preventDefault();
})
divTwo.addEventListener('drop', (event) => {
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
})
divThree.addEventListener('dragover', (event) => {
    event.preventDefault();
})
divThree.addEventListener('drop', (event) => {
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
})
imagen.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("text", event.target.id);
})
imagen2.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("text", event.target.id);
})

