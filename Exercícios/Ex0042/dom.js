//vamos alterar o titulo , primeira coisa devemos selecionar o elemento
//temos duas formas de fazer isso , com innerhtml ou textcontent
// o text content é o mais utilizado e recomendado

let titulo  = document.getElementById('titulo')

//innerhtml

titulo.innerHTML = 'Olá , mundo!'

//text content
let titulo2 = document.getElementById('titulo2')
titulo2.textContent = 'Testando'