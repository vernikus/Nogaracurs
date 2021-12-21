let dogo = {
    name: 'rito',
    age : 5,
    color : 'blue'
}

function animales (nombre,genero){
    this.nombre = nombre,
    this.genero = genero,
    this.sonar = () =>{ 
        console.log('sonido de animal')
    };
    this.setName = function (newNombre){
        this.nombre = newNombre
    };
    this.getName = () => this.nombre;
}

const animal1 = new animales('conejo','female')
animal1.setName('sinejo xd')
console.log(animal1)