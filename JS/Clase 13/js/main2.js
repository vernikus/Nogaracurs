
// FUNCIONES DE ORDEN SUPERIOR


const getName = ()=>{
    const user = document.getElementById('name').value
    return user;
}
const send = document.getElementById('send')
send.addEventListener('click', (event)=>{
    event.preventDefault()
    // console.log(user.value)
    // return user.value

    getDataUser(getName())
})

const getDataUser =(data)=>{
    console.log(data)
}

///////////                                             FUNCIONES DE ORDEN SUPERIOR                                                ///////////



