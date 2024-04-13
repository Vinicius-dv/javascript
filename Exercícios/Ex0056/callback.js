function exibir(num){
    console.log('A operação resultou em '+num)
}

function soma(a,b ,num){
    let op = a+b
     num(op)
    return op
}


function multiplicação(a,b,num){
    let op = a*b
    num(op)
    return op
}

soma(2,2,exibir)
multiplicação(2,4 ,exibir)


