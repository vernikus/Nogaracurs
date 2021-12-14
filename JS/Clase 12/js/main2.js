const url = 'https://rickandmortyapi.com/api/character';
let main = document.getElementsByTagName('main')[0]
let next = document.createElement('button');
let container = document.createElement('ul');
next.innerHTML = 'next'
main.appendChild(next)

const getData =(url) =>{
     fetch(url)
    .then(response => response.json())
    .then(data =>{
        // console.log(data)
        preView(data),
        nextView(data.info)
    })
} 

const preView =(info)=>{
    for(let index =0; index < info.results.length;index++){
        let li = document.createElement('li')
        li.innerHTML = `
        <img src = "${info.results[index].image}">
        <p>${info.results[index].name}</p>
        `
        container.appendChild(li)
        main.appendChild(container)

    }
}
const nextView = (dataNext) =>{
    getData(dataNext.next)
    console.log(dataNext.next)

    next.addEventListener('click', () =>{
        for (let index = 0; index < container.children.length; index ++){
            console.log(container.children[index])
            container.children[index].children[1].innerHTML = 'adasdasdad'
         
         
            // for(let index2 = 0 ; index2 < data.results.length; index2++){
            //     container.children[index].children[1].innerHTML = data.results[index2].name;
            //     container.children[index].children[0].innerHTML = data.results[index2].image;
            // }
        }
    })
}
getData(url)