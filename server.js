const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req,res) =>{


    try {
        //response é a resposta do axios MAS eu tiro o data de dentro do response
        const { data }  = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})
    

app.listen('4567', console.log('rodando na porta 4567'))