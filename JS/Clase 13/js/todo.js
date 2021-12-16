const list = document.getElementsByClassName('list')[0];
const remove = document.getElementById('remove');
const getDo = ()=>{
    const user = document.getElementById('name').value
    return user;
}
const send = document.getElementById('send')
send.addEventListener('click', (event)=>{
    event.preventDefault()
    // console.log(user.value)
    // return user.value

    printDo(getDo())
   // removeDo()
})

const printDo =(data)=>{
    let homeWork = document.createElement('li');
    homeWork.innerHTML = data
    list.appendChild(homeWork)
}

const removeDo = () =>{
    remove.addEventListener('click', ()=>{
        console.log('dlkfjausdfhu')
        list.removeChild(list.lastElementChild)
    })
}
removeDo()
// const deleDo = () =>{
//     console.log('dlkfjausdfhu')
//     // 
// }
