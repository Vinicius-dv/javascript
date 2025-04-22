const notas_obj = {
    nota1:10,
    nota2:4,
    nota3:6
}


let nome = true
console.log(typeof nome)

function verificar_media(nota){
    const notas = Object.values(nota)
    const soma = notas.reduce((total,nota_atual)=>{
        return total+nota_atual
    },0)

    const media = soma/3
    if(media>5){
        console.log('Aluno passou de ano')
    }else{
        console.log('Aluno não passou de ano')
    }
}


verificar_media(notas_obj)