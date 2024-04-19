// no exemplo abaixo o this.nome faz referencia a  um elemento da minha função , então this nome é como se fosse uma variavel declarada para a a função aluno que recebe o valor do parametro nome. Então o this sempre vai fazer refencia ao próprio elemento que   ele está dentro que no caso abaixo é uma função . Então é como se eu estive ao invés de this seria aluno.

function aluno(nome,nota){
    aluno.nome = nome
    aluno.nota = nota

    this.dadosAnonimos = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }


    // quando eu dou this.nome abaixo eu o this está se referindo ao al1 por isso vai dar vinicius , 10 o this antes de dados_arrowAnonimos é a representação de al1  
    this.dados_arrowAnonimos = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }


}

const al1 = new aluno('vinicius',10)

al1.dadosAnonimos()
al1.dados_arrowAnonimos()