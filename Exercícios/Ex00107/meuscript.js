let nome = new String('Viniocius Henrrioque Rossi 2009')
let email = 'Vinicius123@gmail.com'
let numeros = '1,10,100,1000'

console.log(nome)

console.log(nome.search(/henrrique/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig,'teste'))


//com o uso dos colchetes , eu estou procurando a letra O e H, e também com ele eu posso procurar exemplo: 
//caracteres de a-m o uso do - , significa até onde vai que no caso é até M , ja o | significa "E também procurar" 0-9

console.log(nome.match(/[a-m|0-9]/ig))

//Metacaracteres
// o \d , ele ira me retornar somente digitos numericos
console.log(nome.match(/\d/ig))

// Me retorna os espaços da string
console.log(nome.match(/\s/ig))

// Me retorna caracteres
console.log(nome.match(/\bV/ig))

//Quantificadores
// o + me retorna a string juntinha e não separada uma por uma 
console.log(nome.match(/i+|s+/ig))


console.log(numeros.match(/10/ig))

// Ele vai encontrar o 10  , e o resto ele vai juntar tudo mesmo eu falando para retornar 10 o + ele forma um 'Grupo' e não 1 por 1
console.log(numeros.match(/10+/ig))

// com o * ele vai me retornar tanto o 10 e também o primeiro digito
console.log(numeros.match(/10*/ig))


//Com o ? ele me retorna de 0-1 no caso abaixo
console.log(numeros.match(/10?/ig))
