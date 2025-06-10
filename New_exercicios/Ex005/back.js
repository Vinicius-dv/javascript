const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
const jwt = require('jsonwebtoken')


app.post('/login',(req,res)=>{
    const nome = req.body
    const token = jwt.sign(nome,'peixe',{expiresIn:'1h'})
    return res.status(200).json({token:token})
})

app.get('/',(req,res)=>[
    res.sendFile(path.join(__dirname,'/public/main.html'))
])

app.post('/pag',(req,res)=>{
    const token = req.body
    console.log(token)
    if(!token){
        return res.status(400).json({message:'você não tem o token'})
    }else{
        return res.status(200).json({message:'você tem o token '})
    }
})

app.listen(3000,()=>{
    console.log('servidor iniciado')
})