//trocando elementos primeiro vamos criar o elemento 
var elemento = document.createElement('h3')
elemento.classList = 'elemento'

var texto = document.createTextNode('esse é o texto do elemento')
elemento.appendChild(texto)
console.log(elemento)

//agora vamos selecionar o elemento que queremos trocar
var titulo = document.getElementById('titulo')
console.log(titulo)

/*agora precisamos selecionar o elemento pai que no caso do id titulo é o body ou seja o titulo está dentro de body e podemos usar o id ou class do elemento e usar a propriedade .parentnode*/

var pai = titulo.parentNode

//agora vamos trocar os elementos , abaixo eu usei o var pai que é o body em seguida eu usei um replaceChild para trocar o elemento que é um h3 pelo titulo que é um h1
pai.replaceChild(elemento,titulo)