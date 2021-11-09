


let corral = [
    'gato',
    'perro',
    'ardilla',
    'tigre',
    'tiburon'
]
console.log(corral)

for(let index = 0; index < corral.length; index++){
    document.write(`${corral[index]}<br>`)
    
}


let colors = [
    'azul',
    'rojo',
    'narajan',
    'morado',
    [
        'dorado',
        'plateado',
        'anaranjado',
        'azulado :,v'
    ]
]


let imgs = [
    'cat2',
    'cat3',
    'cat4',
    'cat5',
    'cat6'
]

let descriptions =[
    'Gato con ojotes',
    'Gato naranja',
    'Gato en cama',
    'Gato con cejas',
    'Gato mal recortado',
]
//para que se pinte la imagen en el html se tiene que poner la etiqueta y lo unico que se concatena es el nombre de la imgen que se encuentra en el array

for(let index=0; index < imgs.length;index++){
    document.write(`<img src="../media/${imgs[index]}.jpg" alt"">`)
    
    for(let index2= descriptions.length; index2 <= descriptions.length ; index2++){
        document.write(`<p>${descriptions[index]}</p>`)
    }
}