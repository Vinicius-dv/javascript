let x = 0 
let tempo = setTimeout(function(){
    console.log('o x é 0')
},1000)

// e se eu mudar o valor de x então não faz mais sentido usar a função acima né para resolver isso podemos usar o clearTimeout

x = 5

if(x>0){
    clearTimeout(tempo)
    console.log('o x não é zero é: '+x)
}


//clearInterval na pratica

var meuintervalo = setInterval(() =>{
   console.log('Imprimindo o interval')
},1000)

setTimeout(() =>{
    console.log('Não precisamos mais repetir')
    clearInterval(meuintervalo)
},1500)































































































