//splice podemos adicionar um elemento no meio do array o segundo parametro é para deletar algum elemento e o terceiro é o que eu vou adicionar posso adionar tanto number quanto string

var array = [1,2,3,4,5]
array.splice(2,0 , 'teste')
console.log(array)

//Também consigo remover um elemento com splice veja só no elemento abaixo
array.splice(4,1)
console.log(array)

//IndexOf Ele acha o indice de um elemento

console.log(array.indexOf(5))


//Join com essa tag consigo transformar arrays em strings 

var array2 = ['O', 'rato', 'roeu', 'a', 'roupa']

console.log(array2.join(' '))


//reverse neste caso eu vou inverter as strings

console.log(array2.reverse())