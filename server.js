const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req,res) =>{
    return res.json([
        {name: 'jeff'},
        {name: 'diego'},
        {name: 'well'},
        {name: "carla"},
        {name: 'duda'}
    ])
})

app.listen('4567', console.log('rodando na porta 4567'))