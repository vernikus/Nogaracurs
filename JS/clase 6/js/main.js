

// let contElement = `<div></div>`
// let element = `<p>lo que sea </p>`;

// document.getElementsByTagName('body')[0].innerHTML= element;


// let container = document.getElementsByTagName('main')[0]
// let animales =[
//     'guajolote',
//     'pavo',
//     'gallina',
//     'conejo',
//     'sinejo:v'
// ]


// for(let index = 0 ; index < animales.length; index++){
//     let  element = document.createElement('div')
//     element.innerHTML = `<p>${animales[index]}</p>`
//     container.appendChild(element)
// }

let tiktokers = [
    {
        name: 'Luis Angel',
        stars: 10,
        type: 'Frío/Ada',
        info: 'Este monstruo de angular se alimenta de JavaScript. Su debilidad son los corridos tumbados.',
        atk: 1200,
        def: 900,
        img: 'IMG-20211005-WA0001.jpg',
    },
    {
        name: 'Daniel',
        stars: 10,
        type: 'Bestía Divina/Efecto',
        info: 'Alias DevCaress no puede invocado de modo especial. Requiere 3 sacrificios de desarrolladores, su debilidad es PHP.',
        atk: 3200,
        def: 2000,
        img: 'IMG-20211005-WA0003.jpg',
    },
    {
        name: "Kao Lo",
        stars: 7,
        type: "Especialista/Normal",
        info: "Experta en horóscopos, habilidad sobre humana para el baile, debilidad maquetación en HTML",
        atk: 2500,
        def: 2200,
        img: 'IMG-20211005-WA0005.jpg',
    },
    {
        name: 'Cesar García',
        stars:1,
        type:'Demonio/Efecto',
        info:'Alias Cesar Código Bits, habilidad experto en wordpress y en wix, debilidad la chancla, este demonio es hermano de Kuriboh',
        atk: 300,
        def: 200,
        img: 'IMG-20211005-WA0008.jpg',
    },
    {
        name: 'Gerardo Schekaiban',
        stars: 5,
        type: 'Guerrero/Fusión',
        info: 'Poder especial "Yo soy tu amigo fiel de la programacion" aumenta el poder de tus otros programadores en el campo de batalla, debilidad Andy',
        atk: 1800,
        def: 1200,
        img: 'IMG-20211005-WA0011.jpg',
    },
    {
        name: 'Carlita M. F. Román',
        stars: 6,
        type: 'Especialista/Efecto',
        info: 'Evangelizar a otros programadores al mundo de la IA, por cada programador evangelizado Carlita.py aumenta 100 ATK, debilidad por las cumbias mexicanas.',
        atk: 2000,
        def: 1700,
        img: 'IMG-20211005-WA0019.jpg',
    },
    {
        name:'Edrissi Machorro',
        stars:7,
        type:'Dragón/Fusión',
        info:'Habilidad dormir, y hacerle broma a Cesar Código Bits, cuando está carta en juego junto con la de Cesar García, Cesar García pierde 100 ATK',
        atk:2400,
        def:200,
        img: 'IMG-20211005-WA0024.jpg',
    },
    {
        name:'Arelis Reyes',
        stars: 8,
        type:'Dragón',
        info:'Alias chica Phyton, habilidad dar consejos de programación y evangelizar con su fuego de dragon.py debilidad Maeva',
        atk:3000,
        def:2500,
        img: 'IMG-20211005-WA0028.jpg',
    },
    {
        name: 'Francisco Jiménez',
        stars: 2,
        type: 'Lanzador de conjuros/Efecto',
        info: 'Alias Pamsho.dev hsbilidad maestro en las artes místicas de JavaScript y sacar tiempo para redes sociales, stream, trabajar y estudiar pero además tener pareja, debilidad la vacuna del covid',
        atk: 500,
        def: 400,
        img: 'IMG-20211005-WA0033.jpg',
    },
    {
        name: 'Daniel Garrido',
        stars: 6,
        type: 'Insecto/Efecto',
        info: 'Habilidad en dar consejos de programación, especialidad pedir dos tacos de lengua, y le quita el 50% ATK debilidad Alejandro Apodaca.',
        atk: 700,
        def: 400,
        img: 'IMG-20211005-WA0042.jpg',
    },
    {
        name: 'Clemente DonOso',
        stars: 12,
        type: 'Bestía Divina/Efecto',
        info: 'Habilidad especial éjercito de robots, debilidad los dogecoins.',
        atk: 4000,
        def: 4000,
        img: 'IMG-20211005-WA0044.jpg',
    },
    {
        name: 'Toledo Floang',
        stars: 12,
        type: 'Bestía Divina/Efecto',
        info: 'Alias: Ingesaurio. Habilidad especial: Dañar libros de ingeniería y dar consejos de ingenieria. En cada ronda aumenta 500ATK.',
        atk: 4000,
        def: 4000,
        img: 'IMG-20211005-WA0047.jpg',
    },
    {
        name: 'Stefan Castillo',
        stars: 10,
        type: 'Hechicero/Efecto',
        info: 'Habilidad para las artes oscuras del CSS mágico. Habilidad especial: Logos con CSS. Debilidad: Usar JavaScript le quita 100 ATK',
        atk: 2200,
        def: 2000,
        img: 'IMG-20211005-WA0052.jpg',
    },
    {
        name: "Maeva Mazadiego",
        stars: 12,
        type: "Hechicero/Efecto",
        info: "Alias Mae, habilidad seriedad absoluta divina, cuando se encuentra en el juego Chica Python Maeva obtiene 1000 ATK",
        atk: 3200,
        def: 3000,
        img: 'IMG-20211005-WA0053.jpg',
    },
    {
        name: 'Jessica Azcona',
        stars: 9,
        type: 'Hechicera',
        info: 'Hablilidad magia antigua que es capaz de borrar cuentas de github, debilidad C, C++',
        atk: 1200,
        def: 900,
        img: 'IMG-20211005-WA0065.jpg',
    },
    {
        name: 'David Corteza',
        stars: 12,
        type: 'Bestía Divina',
        info: 'Habilidad hacer carnitas asadas, habilidad especial tiktoks genialesde risa, debilidad el hermano de Kuriboh le resta la mitad de DEF y ATK.',
        atk: 4000,
        def: 4000,
        img: 'IMG-20211005-WA0066.jpg',
    },
    {
        name: 'Rodo Ferro',
        stars:12,
        type:' Mona China/Synchro/Efecto',
        info:'Habilidad sobre humana para generación de monas chinas para atacar con su ejército, si en el campo de batalla se encuentra Carlita.py evangelizan el doble de rápido al mundo del IA, debilidad el hermano de Kuriboh',
        atk:3000,
        def:2500,
        img: 'IMG-20211005-WA0068.jpg',
    },
    {
        name: 'Joss Pelcastre',
        stars: 12,
        type: 'Dragon/Efecto',
        info: 'Habilidad de maquetación y diseño dragonistico bestial, si en el campo de batalla se encuentra Stefan Castillo duplican su habilidad en CSS divino.',
        atk: 4000,
        def: 3500,
        img: 'IMG-20211005-WA0070.jpg',
    },
    {
        name: 'Quién sabe',
        stars: 8,
        type: 'Metal/Efecto',
        info: 'Habilidad divina de charla astral, especial hackear Facebook de tu ex, si se encuentra al hermano de Kuriboh se igualan sus ATK y DEF',
        atk: 1900,
        def: 1400,
        img: 'IMG-20211005-WA0076.jpg',
    },
    {
        name: 'Mafer Vicas',
        stars: 8,
        type: 'Planta/Efecto',
        info: 'Habilidad dar chismesitos tecnologicos cuando Kao lo están en campo de batalla ambos suben 500 ATK.',
        atk: 1500,
        def: 1500,
        img: 'IMG-20211006-WA0014.jpg',
    },
    {
        name: 'David Portilla',
        stars: 8,
        type: 'Mona China/Metal/Efecto',
        info: 'Alias el Frontend Mecatronico Habilidad especial jugar pokimon con el Rodo Ferro y sus monas chinas, si en el campo se encuentra a Pamsho.dev incrementa ambos su poder con esteroides a 2500 ATK y DEF',
        atk: 1900,
        def: 1900,
        img: 'IMG-20211006-WA0021.jpg',
    },
    {
        name: 'Maybemar Hernández',
        stars: 8,
        type: 'Bestía Divina/Efecto',
        info: 'Habilidad para hacer videos de tips y comedia en TikTok, habilidad sobre humana de motivar a otros programadores, por cada programador en el campo aumenta en 100 ATK, debilidad el paracetamol de la informatica (reiniciar).',
        atk: 3000,
        def: 3000,
        img: 'IMG-20211006-WA0023.jpg',
    },
    {
        name: 'Verónica Barrientos',
        stars: 12,
        type: 'Bestía Divina/Efecto',
        info: 'Alias T-Girl, con su habilidad especial dino explicación ayuda a los demás a elevar su ATK 250 cada ronda, habilidad natural para platicas astrales, debilidad chocolates.',
        atk: 3000,
        def: 3000,
        img: 'IMG-20211007-WA0037.jpg',
    },
];
var container = document.getElementsByTagName('main')[0];

for(let index = 0 ; index < tiktokers.length ; index++){
    let element = document.createElement('div');
    let contador = index;
    element.classList.add('container_shadow');
    element.innerHTML=`
    <div>
        <h1>${tiktokers[index].name}</h1>
        <div></div>
        <div></div>
        <div>
            <h2>[${tiktokers[index].type}]</h2>
            <p>${tiktokers[index].info}</p>
            <span>
                atk/${tiktokers[index].atk} def/${tiktokers[index].def}
            </span>
        </div>
    </div>
    
    `;
    container.appendChild(element);
    container.children[contador].children[0].children[2].style.backgroundImage  =`url(../media/cards/${tiktokers[index].img})`;
    //console.log(container.children[contador].children[0].children[2])
    for(let index2 = 0;index2 < tiktokers[index].stars;index2++){
        var img = document.createElement('img')
        img.src="../media/star.png";
        container.children[contador].children[0].children[1].appendChild(img)
    }
    
}
