//Se pone la direccion de la api
const url = 'https://rickandmortyapi.com/api/character';
let main = document.getElementsByTagName('main')[0]
let next = document.createElement('button');
let container = document.createElement('ul');
next.innerHTML = 'next'
main.appendChild(next)



//Se usa fetch
fetch(url)

    //Se usa para generar una peticion

    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let index = 0; index < data.results.length; index++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let p = document.createElement('p');
            img.innerHTML = img.setAttribute('src', data.results[index].image);
            p.innerHTML = data.results[index].name;
            li.insertAdjacentElement('afterbegin', img);
            li.appendChild(p);
            container.appendChild(li);
            main.appendChild(container);
        }
        {
            let urlNext = data.info;
            //console.log(urlNext)
            fetch(urlNext.next)
            .then(response => response.json())
            .then(data => {
                next.addEventListener('click',()=>{
                    console.log(data)
                })
            })
            
        }
    })

// next.addEventListener('click', (event) => {
//     //let nextUrl = 'https://rickandmortyapi.com/api/character'
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(url)
//         for (let index = 0; index < data.results.length; index++) {
//             let li = document.createElement('li');
//             let img = document.createElement('img');
//             let p = document.createElement('p');
//             img.innerHTML = img.setAttribute('src', data.results[index].image);
//             p.innerHTML = data.results[index].name;
//             li.insertAdjacentElement('afterbegin', img);
//             li.appendChild(p);
//             container.appendChild(li);;
//             main.appendChild(container);
//         }

//     })
// })

