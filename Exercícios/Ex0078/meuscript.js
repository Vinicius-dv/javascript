class carro {
    constructor(modelo ,país , ptipo){
      this.modeloCarro = modelo
      this.carroPaís = país
      if(ptipo == 1){
        this.tipo = 'Esportivo'
      } else{
        this.tipo = 'Não é esportivo'
      }
    }

 
    // criei um método chamado info
    info(){
        console.log('O modelo é: '+this.modeloCarro)
        console.log('O país de origem  é: '+this.carroPaís)
        console.log('O tipo do carro é '+this.tipo)
    }
}


m1 = new carro('mazda-rx7','Japão' , 1)
m1.info()


