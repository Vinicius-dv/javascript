const express  = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/main.html'))
})

app.post('/users', async (req,res)=>{
        const users = [
        {name:'vini',curso:'mongoose'},
        {name:'leo',curso:'node'},
        {name:'victor',curso:'react'},
        {name:'ana',curso:'typescript'},
        ]
        return res.status(200).json(users)
})

app.listen(3000,()=>{
    console.log('servidor iniciado')
})