 const obj_notas = {
    nota1:5,
    nota2:2,
    nota3:3
}

function verificar_media(nota1_obj){
    //com o object.values eu pego apenas os valores do objeto, e ele me retorna um array
    const notas = Object.values(nota1_obj)
    //O reduce recebe dois parametros padrão o total que é o valor acumulado a cada interação ou seja na primeira interação eu faço 0+5 e depois é  eu faço 5+2 ele armazena o 10 e a nota é o valor atual do array ou seja a cada interação ele pega o valor do array atual e faz a soma com o valor acumulado que é 10 por exemplo mais 3 ai armazena o 13 no total e passa para o proximo valor do array, ou seja a nota faz a interação com o array e pega o numero e faz a soma com o total que armazena o resultado de toda conta.
   const soma = notas.reduce((total,nota)=>{
       return total+nota
    },0)
    const media = soma/3
    console.log(soma,media)

    if(media>5){
        console.log('Aluno passou de ano')
    }else{
        console.log('Aluno não passou de ano')
    }


}   

verificar_media( obj_notas)