const express = require('express')
const bodyParser=require('body-parser')
const {randomBytes} = require('crypto')
const cors =require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const commentsByPostid={};

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostid[req.params.id] || [])
})





app.post('/posts/:id/comments',(req,res)=>{
    console.log("here in comments")
    const commentId = randomBytes(4).toString('hex')
    const {content}=req.body;
    console.log(content,"here sitheiaosndvakl")
    const comments = commentsByPostid[req.params.id] || [];

    comments.push({id: commentId,content});

    commentsByPostid[req.params.id] = comments;
    console.log(commentId,commentsByPostid,"here")
    res.status(201).send(comments);
})

app.listen(4041,()=>{
    console.log('Listening at http://Localhost:4041')
})