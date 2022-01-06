localStorage.setItem("nickName","Vernikus");
const user = localStorage.getItem("nickName");
//Es lo mismo que localStorage pero se borran los datos una ves cerrado todos los navegadores
// sessionStorage.setItem("nickName","Vernikus");
// const user = sessionStorage.getItem("nickName");

let title = document.createElement('h1');
title.innerHTML = user
let body = document.getElementsByTagName('body')[0]
body.appendChild(title)
