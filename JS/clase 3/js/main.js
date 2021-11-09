for(let i = 0;i < 5; i++ ){
    document.write('<h2>que es lo que paso</h1>');
};



// for(let i = 1;i <=10; i++ ){
//         document.write('<h3>'+ i +'x 10 ='+ i*10+ '</h3>');
//     };
    
    
for(let i = 1;i <=10; i++ ){
    for(let tabla = 1 ; tabla <=10;tabla++)
        document.write(`<h3> ${i} x ${tabla} = ${i*tabla}</h3>`)
};

var niveles = prompt('¿cuantos niveles quieres que tenga tu piramide?');

for (i = 0; i < niveles; i++) {
    for (index = 0; index <= i; index++) {
        document.write(`♣`);
    }
    document.write('<br>');   
};