let pessoa = {

    nome: 'João',
   
    apresentar: function() {
   
    console.log(`Olá, meu nome é ${this.nome}.`);
   
    } };
  pessoa.apresentar()