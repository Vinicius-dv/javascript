var titulo = document.getElementById('titulo')

//neste exemplo abaixo eu estou adicionado um atributo do tipo class ao titulo e no segundo parametro estou dando o nome do atributo
titulo.setAttribute('class' , 'testando')
console.log(titulo)

var btn  = document.getElementById('btn')

//perceba que abaixo eu dei um atributo disabled ou seja eu desabilitei o botão com o id btn
btn.setAttribute('disabled', 'desabilitado')

//no exemplo abaixo eu troquei o id do h2 de titulo 2 para olá
var titulo2 = document.getElementById('titulo2')
titulo2.setAttribute('id' , 'Olá')

//remover atributo

var lista = document.getElementById('lista')

lista.removeAttribute('id')