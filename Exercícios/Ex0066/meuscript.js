//keydown , no eexemplo abaixo , sempre que eu clicar em uma tecla ele vai executar o comando abaixo no parametro eu posso dar qualquer nome 


// quando eu dou o .key quando eu clicar em uma tecla vai aparecer só ela claro que isso só funciona se o evento for keydown eu acho

document.addEventListener('keydown' , (piriripororo)=>{
    console.log(piriripororo.key)

    if(piriripororo.key === 'Enter'){
        console.log('Você apertou o enter sapeca')
    }
})

//keyup no exemplo abaixo o comando só vai ser executado quando eu soltar a tecla enter , isso funciona para todas as teclas
document.addEventListener('keyup' , (ugauga)=>{
    if(ugauga.key === 'Enter'){
        console.log('Soltou o Enter')
    }
})