function num(n){
    if(n<38){
        console.log('notas reprovadas'+n)
        return
    }
    let nota = n
    let multiplo_prox_5 = Math.ceil(nota/5)*5
    if(multiplo_prox_5-nota<3){
        nota = multiplo_prox_5
        console.log('Sua nota foi arredondada para:'+nota)
    }else{
        console.log('sua nota permaneceu a mesma')
    }
}
let notas = [84, 29, 57, 38, 73, 67, 33, 99, 61, 62]
notas.map(num)