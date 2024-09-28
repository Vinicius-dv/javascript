const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const banco = require('./models/banco')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/carrinho')
  .then(() => {
    console.log('Conectado ao mongo')
  })
  .catch((err) => {
    console.log('Erro ao se conectar' + err)
  })


  app.post('/api/adicionar', (req, res) => {
    const novoItem = new banco(req.body);
    novoItem.save()
        .then(item => res.status(201).json(item))
        .catch(error => {
            console.error('Erro ao adicionar item:', error);
            res.status(500).json({ error: 'Erro ao adicionar item' });
        });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
