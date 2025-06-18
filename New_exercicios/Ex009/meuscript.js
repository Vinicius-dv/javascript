function hora(string){
    let formato_hora = string.slice(-2)
    let meio_hora = string.slice(3,8)
    let hora = Number(string.slice(0,2))
    let hora_24;
    if(formato_hora==='PM'){
        if(hora===12){
            hora_24 = '12:'+meio_hora
        }else if(hora<12){
            hora+=12
            hora_24 = hora+':'+meio_hora
        }
        if(hora>12){
            hora_24 = hora+':'+meio_hora
        }
        if(hora===24){
            hora_24 = '00'+':'+meio_hora
        }
        if(hora>24){
            alert('coloque um horario real')
            return
        }
    }
    if(formato_hora==='AM'){
        if(hora>12){
            alert('a hora em am so vai até 12 meu querido')
            return
        }
        if(hora===12){
            hora_24 = '00'+':'+meio_hora
        }else if(hora<12){
            hora_24 = hora+':'+meio_hora
        }
    }
    console.log(hora_24)
}

hora('11:59:59PM')