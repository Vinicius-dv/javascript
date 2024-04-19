// neste caso eu usei o spread para juntar dois objetos em um só 

/*const jogador1 = {nome:'bruno' , energia:100 ,vida:3 ,magia:150}
const jogador2 = {nome:'Moraes' , energia:70 ,vida:4 ,defesa:120}
const jogador3 = {...jogador1,...jogador2}
console.log(jogador3)*/





// em funções também da para usar o spread
const soma  = (n1,n2,n3) =>{
    return n1+n2+n3
}

// fazendo isso eu vou espalhar os valores para cada parametro de soma ou seja o 4 vai no n1 e assim vai , mesmo que eu tenha mais valores do que os parametros da funçao soma ele só vai pegar os primeiros valores e somar
let valores = [4,6,4]

console.log (soma(...valores))
