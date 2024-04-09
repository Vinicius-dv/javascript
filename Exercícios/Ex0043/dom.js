
//criando o paragrafo
var novoparagrafo = document.createElement('p')
console.log(novoparagrafo)

//criando o texto que vai ser colocado dentro do paragrafo
var texto = document.createTextNode('Este é o conteúdo do paragrafo')

//adicionando o conteudo dentro do paragrafo
novoparagrafo.appendChild(texto)

//chamando o body
var body = document.querySelector('body')
console.log(body)

//adicionado o paragrafo no body
body.appendChild(novoparagrafo)


//inserindo um conteudo dentro de uma div

//chamando a div
var conteudo = document.getElementById('conteudo')
console.log(conteudo)

//criando o span que vai ser colocado dentro da div
var el = document.createElement('span')

//criando o conteúdo dentro do span
el.appendChild(document.createTextNode('conteúdo do span'))
console.log(el)

//adicionando o span dentro da div
conteudo.appendChild(el)