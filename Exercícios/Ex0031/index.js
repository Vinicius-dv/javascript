for(var i = 10 ; i>0; i--){
    console.log('Vamos contar em forma decrecente ' +i)
    if(i===5){
        break
    }

   
}

for(var x = 10; x<100; x+=10){
    
    if(x===60 ||x===90){
        console.log('[ERRO]')
        continue
        
    }
    console.log('testando o continue '+x)
}