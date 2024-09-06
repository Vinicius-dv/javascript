const express = require('express');
const cors = require('cors')
const app = express();
const porta = process.env.PORT || 3000;


app.use(express.json())


app.use(cors({
    origin: '*'
}))

app.post('/',(req,res)=>{
    const dadosRecebidos = req.body
    res.send(dadosRecebidos)
    console.log(dadosRecebidos)
})

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')

    let numero = {
        temperatura: Math.round(Math.random()*10),
        nivel: Math.round(Math.random()*10),
        pressão: Math.round(Math.random()*10)
    }
    res.send(JSON.stringify(numero))
});



app.listen(porta, () => { 
    console.log('Servidor rodando na porta ' + porta);
});


