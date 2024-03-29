//length

var array = [1,2,3,4,5]

console.log(array.length)

//push com está tag consigo adicionar elementos no final  em um array , não só number como string também , vejá no exemplo abaixo

array.push(10)
array.push('Qualquer coisa')
console.log(array)

//pop ele vai remover um elemento do fim do array

array.pop()

console.log(array)

//unshift ele vai adicionar um elemento no começo do array

array.unshift(0)

console.log(array)

//shift ele vai remover um elemento do começo de um array

array.shift()
console.log(array)


//Acessar o último elemento de um array

console.log(array[array.length -1])

//Isrray consegue verificar se é um array

console.log(Array.isArray(5))
console.log(Array.isArray(array))