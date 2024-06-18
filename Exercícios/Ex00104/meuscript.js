class jogador{
    constructor(nomes){
        this.nome = nomes
        this.id = Symbol()
    }
}

let jogadores = [new jogador('João'),new jogador('Gabriel'),new jogador('Leonardo')]

let s1 = jogadores[2].id

jogadores = jogadores.filter((j)=>{
    return j.nome!= 'João'
})
console.log(jogadores)
console.log(s1)