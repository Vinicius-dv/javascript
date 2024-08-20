var http = require('htpp')
http.createServer((req,res)=>{


    let numero = {
        temp:Math.round(Math.random()*10)
    }

    res.end(JSON.stringify(numero))
}).listen(3000)