const express = require('express')
const bodyParser=require('body-parser')
const {randomBytes} = require('crypto')
const cors =require('cors')
const axios= require('axios')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const commentsByPostid={};

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostid[req.params.id] || [])
})



app.post('/posts/:id/comments',async (req,res)=>{
    console.log("here in comments")
    const commentId = randomBytes(4).toString('hex')
    const {content}=req.body;
    console.log(content,"here sitheiaosndvakl")
    const comments = commentsByPostid[req.params.id] || [];

    comments.push({id: commentId,content , status: "pending"});

    commentsByPostid[req.params.id] = comments;

    await axios.post('http://localhost:4005/events',{
        type:'CommentCreated',
        data:{
            id:commentId,
            content,
            postId:req.params.id,
            status:"pending"
        }
    })

    console.log(commentId,commentsByPostid,"here")
    res.status(201).send(comments);
})

app.post('/events',async (req,res)=>{
    console.log("received here 1",req.body.type)

    
  const { type, data } = req.body;

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostid[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }
    res.send({})
})

app.listen(4041,()=>{
    console.log('Listening at http://Localhost:4041')
})