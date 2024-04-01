let pessoa = {
    nome:'vinicius',
    idade: 15,
    falar: function(){
        console.log('Olá tudo bem ?')
    },
    soma: function(a,b){
        return a+b
    }

}

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.falar()

let calculo = pessoa.soma(2,2)

console.log(calculo)