function arredondar(n){
    if(n<38){
        console.log('reprovado')
        return
    }
    let proximom = Math.ceil(n/5)*5
    if(proximom ==n){
        console.log('Sua nota continua a mesma')
        return
    }
    if(proximom-n<3){
        n = proximom
        console.log('Sua nota foi arredondada para '+n)
    }else{
        console.log('Sua nota permaneceu a mesma '+n)
    }

}

let lista = [28,55,38,12,85]
lista.map((itens,index)=>arredondar(itens))

