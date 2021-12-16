const url = 'https://rickandmortyapi.com/api/character';
let main = document.getElementsByTagName('main')[0]
let next = document.createElement('button');
let container = document.createElement('ul');
next.innerHTML = 'next'
main.appendChild(next)

const getData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
           print(data),
            nextView(data.info)
            //console.log(data.info)
        })
}

const print = (info) => {
    for (let index = 0; index < info.results.length; index++) {
        let li = document.createElement('li')
        li.innerHTML = `
        <img src = "${info.results[index].image}">
        <p>${info.results[index].name}</p>
        `
        container.appendChild(li)
        main.appendChild(container)

    }
}
const nextView = (dataNext) => {
    
    next.addEventListener('click',() => {
        getData(dataNext.next)
        console.log(dataNext)
        
    })
}
getData(url)