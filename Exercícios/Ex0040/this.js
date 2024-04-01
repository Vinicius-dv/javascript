var teste = 5

console.log(this.teste)

let pessoa = {
    nome:'vinicius',
    idade: 15,
    falar: function(){
        console.log('Olá tudo bem ?')
    },
    dizernome: function(){
        console.log('o meu nome é '+this.nome)
    },
    aniversario: function(){
        this.idade +=1
    }
   
    }


pessoa.dizernome()
console.log(pessoa.idade)

pessoa.aniversario()
console.log(pessoa.idade)