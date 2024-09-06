const express = require('express')
const bodyParser= require ('body-parser')
const{randomBytes} =require('crypto')
const cors = require('cors')
const app = express()
const axios =require('axios')
app.use(bodyParser.json())
const posts ={}

app.use(cors())




app.get('/posts',(req,res)=>{
    console.log(posts,"here resached")
    res.send(posts)
})
app.post('/posts', async(req,res)=>{
    console.log("here reached ",req.body)
    const id = randomBytes(4).toString('hex')
    const {title,blogContent }= req.body

    posts[id] ={
        id,title ,blogContent
    }

    // await axios.post('http://localhost:4005/events',{
    //     type:'PostCreated',
    //     data:{
    //         id,
    //         title
    //     }
    // })
    console.log(posts)
    res.status(201).send(posts[id])
})
app.post('events',(req,res)=>{
    console.log("received",req.body.type)

    res.send({})
})

app.listen(4040,()=>{
    console.log('Listening http://Localhost:4040')
})