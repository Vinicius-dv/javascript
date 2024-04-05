var elemento = document.createElement('div')
elemento.classList = 'div-criada'

console.log(elemento)

var conteudo = document.getElementById('conteudo')

//inserindo um elemento filho ou seja inserindo um elemento dentro de conteudo
conteudo.appendChild(elemento)

//inserbefore

var elemento2 = document.createElement('div')

elemento2.classList  = 'div before'

var el3 = document.getElementsByClassName('div-criada')[0]
console.log(el3)

//tenho que botar dois parametros , oque vai ser adicionado e referencia o que vai vim depois 
conteudo.insertBefore(elemento2, el3)