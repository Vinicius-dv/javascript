console.log('Fala peixe')
const express = require('express')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const porta = 3000
const cors = require('cors')

app.use(body_parser.json())
app.use(cors())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/hamburgueria')
  .then(() => {
    console.log('Conectado ao mongo')
  })
  .catch((err) => {
    console.log('Erro ao se conectar' + err)
  })


  const orderSchema = new mongoose.Schema({
    items: Array,
    address: String,
    paymentMethod: String,
  })

  const Sistema_avaliações = new mongoose.Schema({
    stars :Number,
    reviewText: String,
  })
  
  const Order = mongoose.model('Order', orderSchema)
  const Sist_ava = mongoose.model('Sist_ava',Sistema_avaliações)

app.post('/order/checkout',(req,res)=>{
    console.log('Fala peixão')
    console.log(req.body)
    const {items,address,paymentMethod} = req.body
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    if(!items||items.length === 0||!address||!paymentMethod){
        return res.status(400).json({message:'Deu algo de errado ao mandar os items'})
    }
    const newOrder = new Order({items,address,paymentMethod,totalPrice})
    newOrder.save()
    .then((savedOrder)=>{
        return res.status(200).json({message:'Pedido realizado com sucesso',savedOrder})
    }).catch((err)=>{
        return res.status(400).json({message:'O pedido deu errado',err})
    })
})

app.post('/sistema/avaliacoes',(req,res)=>{
  console.log('Rota /avaliações chamada')
  console.log(req.body)
  const {stars,reviewText} = req.body

  const newAva = new Sist_ava({stars,reviewText})
  newAva.save()
  .then((deu_certo)=>{
    console.log('Avaliação salva com sucesso')
    return res.status(200).json({message:'Avaliação salva com sucesso',deu_certo})
  }).catch((err)=>{
    return res.status(400).json({message:'Deu algo errado',err})
  })
})


app.get('/sistema/avaliacoes', (req, res) => {
  Sist_ava.find()
      .then(avaliacoes => {
          return res.status(200).json(avaliacoes);
      })
      .catch(err => {
          return res.status(500).json({ message: 'Erro ao buscar avaliações', err });
      });

})

app.delete('/avaliacoes/:id',(req,res)=>{
  const avaliacaoId = req.params.id

  if (!mongoose.Types.ObjectId.isValid(avaliacaoId)) {
    return res.status(400).json({ message: 'ID inválido' });
}

  Sist_ava.findByIdAndDelete(avaliacaoId)
  .then(()=>{
    res.status(200).json({message:'Avaliação removida com sucesso'})
  }).catch((err)=>{
    console.log(err)
    res.status(500).json({message:'Erro ao remover a avaliação'})
  })
})

app.put('/avaliacoes/:id',(req,res)=>{
  const avaliacaoId = req.params.id
  const {stars} = req.body

  Sist_ava.findByIdAndUpdate(avaliacaoId,{stars},{new:true})
  .then((updateAvaliacao=>{
    if(!updateAvaliacao){
      return res.status(404).json({message:'Estrelas não encontradas peixão'})
    }
    return res.status(200).json({ message: 'Avaliação atualizada com sucesso', updateAvaliacao });
  }))
  .catch((err)=>{
    res.status(500).json({message:'Erro ao atualizar as stars',err})
  })
})


app.put('/sistema/avaliacoes/:id', (req, res) => {
  const avaliacaoId = req.params.id;
  const { stars } = req.body;

  // Lógica para atualizar a avaliação no banco de dados...
  // Certifique-se de retornar um status apropriado e uma resposta JSON.

  Sist_ava.findByIdAndUpdate(avaliacaoId, { stars }, { new: true })
      .then(updatedAvaliacao => {
          if (!updatedAvaliacao) {
              return res.status(404).send({ message: 'Avaliação não encontrada' });
          }
          res.send({ message: 'Avaliação atualizada com sucesso', data: updatedAvaliacao });
      })
      .catch(error => {
          res.status(500).send({ message: 'Erro ao atualizar a avaliação', error });
      });
});

app.listen(porta,()=>{
    console.log('Servidor rodando na porta 3000')
})