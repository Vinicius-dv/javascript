//sintaxe do switch
    let expressao = 2
    let valor1 = 1
    let valor2 = 2
    let valor3 = 3

    //neste exemplo abaixo eu estou comparando o valor da expressão com os valores abaixo então o código vai ser executado quando expressão for igual a algum dos valores abaixo
switch(expressao){
    case valor1:
    console.log('o valor é '+expressao)
    break

    case valor2: 
    console.log('o valor é '+expressao)
    break
    case valor3: 
    console.log('o valor é '+expressao)
    break
    default: console.log('[ERRO]');
}

