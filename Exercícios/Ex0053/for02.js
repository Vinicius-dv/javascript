const nota = Number(prompt('Informe um número entre 0 e 10'))

function validar(nota){
    if(isNaN(nota)|| nota.length==0 || nota>10){
        prompt('Parece que você digitou um valor errado')
    } else{
        while(nota>=0 || nota<=10){
            parseInt(prompt('Sua nota é '+nota))
        }
    }
    return nota

}

validar(nota)