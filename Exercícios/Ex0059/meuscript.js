// setTimeout o tempo não é em segundos e sim milesegundos
    console.log('Antes do setTimeout')
setTimeout( () =>{
    console.log('depois do setTimeout')
},2000)

//setInterval
setInterval(()=>{
    console.log('testando o setInterval')
},1000)