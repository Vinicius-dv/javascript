//tag

var titulo = document.getElementsByTagName('h1')[0]//esse [0] é qual parametro eu quero acessar exemplo eu tenho mais de um h1 se eu botar [0] eu vou acessar o primeiro h1 se for [1] eu acesso o segundo
console.log(titulo)

var lis = document.getElementsByTagName('li')[2]

console.log(lis)

//id quando usamos um get para acessar o id selecionamos apenas o elemento que tem esse id , ja o acima é melhor para acessar varios mas também pode acessar só um

var p = document.getElementById('p')
console.log(p)
//class, ja o class ele está esperando varios elementos 
var classe = document.getElementsByClassName('item')[1]
console.log(classe)