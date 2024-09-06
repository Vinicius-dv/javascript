const express = require('express');
const cors = require('cors')
const app = express();
const porta = process.env.PORT || 3000;


app.use(express.json())


app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')

    let numero = {
        disponibilidade: Math.round(Math.random()*100),
        qualidade: Math.round(Math.random()*100),
        performance: Math.round(Math.random()*100)
    }
    res.send(JSON.stringify(numero))
});



app.listen(porta, () => { 
    console.log('Servidor rodando na porta ' + porta);
});


