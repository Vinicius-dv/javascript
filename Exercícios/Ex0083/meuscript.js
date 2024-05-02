const nave = function(penergia){
    this.energia = penergia
    this.disparos = 100
    
}

const n1 = new nave(100 ,80,4)

// para adicionar uma nova propriedade a nave eu posso usar o prototype 
nave.prototype.vidas = 3


// para criar  metodos também uso o prototype
nave.prototype.disparar = function(){
    if(this.disparos >0){
        this.disparos --
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(`A energia é ${n1.energia}`)
console.log(nave)
console.log(n1)
console.log(n1.disparos)
