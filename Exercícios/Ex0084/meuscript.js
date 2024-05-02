class carro{
    constructor(tipo , estagioTurbo){
        this.turbo = new turbo(estagioTurbo)
        if(tipo ==1){
            this.velMax = 120
        } else{
            if(tipo ==2){
                this.velMax = 160
            } else{
                if(tipo ==3){
                    this.velMax == 200
            }
            } 
            } 
            this.velMax += this.turbo.potencia
            }

            info(){
                console.log(this.velMax)
                console.log(this.turbo)
            }
}

class turbo{
    constructor(pevent){
        if(pevent == 1){
            this.potencia = 50
        } else{
            if(pevent ==2){
                this.potencia = 75
            } else{
                if(pevent ==3){
                    this.potencia = 100
                }
            }
        }
    }
}

class carroEspecial extends carro{
    constructor(estagioTurbo){
        super(estagioTurbo)
        this.nome = 'Carro especial'
    }
}



const c1 = new carro(1,2)

// eu não preciso passar o tipo pq ja passei em super só preciso passar o estagio turbo que eu não passei ainda
const c2 = new carroEspecial(3)

c1.info()
c2.info()
