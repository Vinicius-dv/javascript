let nome = new String('Bruno Pinho Campo')
let nome2 = new String('Bruno Pinho Campos')
let canal = new String('Canal')


console.log(nome)
console.log(typeof(nome))

for(var i = 0 ;i<nome.length;i++){
    console.log(nome.charAt(i))
}

console.log(nome.charCodeAt(1))
console.log(nome.concat(canal))

console.log(nome.indexOf('o'))
console.log(nome.lastIndexOf('o'))


//localeCompare retornos: quando é 1,significa que a 1 string é maior que a segunda , ja -1 é ao contrario , 
//sigfica que a 2 string é maior que a primeira , e 0 significa que as strings são iguais.
console.log(nome.localeCompare(nome2))

console.log(nome.replace('B','P'))

console.log(nome.search('Pinho'))

let sobrenome = nome.slice(6,11)

console.log(sobrenome)

let arr_nome = nome.split('o')
console.log(arr_nome)