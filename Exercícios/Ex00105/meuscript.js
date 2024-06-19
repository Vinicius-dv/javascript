const nome = Symbol('vinicius')
const num = Symbol('9')
const cor_uniforme = Symbol('Amarelo')



const jogador = {
    [nome]: 'Juninho pernambucano',
    uniforme:'',
    camisa:''
    
}


for(p in jogador){
    console.log(p)
}
console.log(jogador[nome])
















/*class jogador{
    constructor(nome,num,cor_uniforme){
        this.nome = nome
        this.num = num
        this.cor_uniforme = cor_uniforme
    }
}

jogadores = [new jogador('Vinicius','9','Amarelo')]
console.log(jogadores[0])*/