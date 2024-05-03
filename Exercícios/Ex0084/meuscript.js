class carroPadrão {
    constructor() {

        if(this.constructor === carroPadrão){
            throw new  TypeError('Essa classe não pode ser instanciada')
        }
        
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class carro extends carroPadrão {
    constructor(tipo, estagioTurbo) {
        super();
        this.turbo = new turbo(estagioTurbo);
        if (tipo === 1) {
            this.velMax = 120;
        } else if (tipo === 2) {
            this.velMax = 160;
        } else if (tipo === 3) {
            this.velMax = 200;
        }
        this.velMax += this.turbo.potencia;
    }

    info() {
        console.log(this.velMax);
        console.log(this.turbo);
        console.log(this.rodas);
        console.log(this.portas);
        console.log(this.ligado);
    }
}

class turbo {
    constructor(pevent) {
        if (pevent === 1) {
            this.potencia = 50;
        } else if (pevent === 2) {
            this.potencia = 75;
        } else if (pevent === 3) {
            this.potencia = 100;
        }
    }
}

class carroEspecial extends carro {
    constructor(tipo, estagioTurbo) {
        super(tipo, estagioTurbo);
        this.nome = 'Carro especial';
    }
}

const c1 = new carro(1, 2);
const c2 = new carroEspecial(3, 3);
const c3 = new carroPadrão()


c1.info();
c2.info();


