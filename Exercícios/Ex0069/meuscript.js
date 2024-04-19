let n1 = [10,20,30 ,44,55,85]
let n2 = [11,21,31,32,18,91]
// usando o spread desse jeito eu vou espalhar os elementos do array n1 para o array n3 
let n3 = [...n1]

//e se eu querer  o n1 e o n2 no n3 ? eu posso fazer dessa forma abaixo , fazendo desta forma eu vou espalhar o array n1 ,n2 para o n3

n3 = [...n1,...n2]

//console.log('Os valores de n1 são: '+n1)
//console.log('Os valores de n2 são: '+n2)
console.log('Os valores de n3 são: '+n3)