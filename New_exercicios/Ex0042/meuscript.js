function verificar_dia(dia){
    if(dia<1||dia>7){
        console.log('digite um dia valido entre 1 e 7')
        return
    }else{
        let dial_atual = dia==1?'Domingo':dia==2?'Segunda':dia==3?'Terça':dia==4?'Quarta':dia==5?'Quinta':dia==6?'Sexta':'sabado'
        console.log(dial_atual)
    }
}

verificar_dia(1)