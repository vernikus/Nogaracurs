
//Paso de parametros entre funciones

function user (){
    let nombre = prompt('Cómo se llama tu nombre?');
    //para poder usar los datos de una funcion en otra funcion se pasa como parametro dentro de la primer funcioln

    let age = prompt('Cuantos años tienes?')


    welcome(nombre,age);
};
    //Se recie el dato de la primer funcion SE LE PUEDE CAMBIAR EL NOMBRE PERO MANTIENE LA MISMA INFORMACION, generalmente se deja el nombre original del dato
function welcome (nombreee,age  = 'De cuantos me veo?'){
    document.write(`Bienvenido ${nombreee} tienes ${age} anios`);

    //no se necesitan pasar los paramatros ya que esta dentro del scope, pero para evitar problemas de sintaxis o si,plemente para entender mejor el código
    function borrarTexto (nombreee){
        document.getElementsByTagName('body')[0].innerText = '';
        document.write(nombreee)
    };

    setTimeout( function (){
        borrarTexto(nombreee);
    },1000);
    
    
};
//user();

function suma (a,b){
    let total = a+b
    console.log(total)
    //El return se usa para regresar informacion, informacion que generalme se usara posteriormente
    return total
}

//suma(1,2)

function mensaje (nomBre){
    return `Hola ${nomBre} feliz dia uwu`
}
//Cuando una funcion tiene un return se pueden ejecutar y guardar datos en variables 
let pedro = mensaje('pedro')

console.log(mensaje('lulu'))