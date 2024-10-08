const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}; // Object to store posts

const handleEvent = (type, data) => {
    if (type === "PostCreated") {
      const { id, title,blogContent } = data;
  
      posts[id] = { id, title,blogContent, comments: [] };
    }
  
    if (type === "CommentCreated") {
      const { id, content, postId, status } = data;
        console.log("heeafmalkds,vlksdmskdms;d")
      const post = posts[postId];
      post.comments.push({ id, content, status });
    }
  
    if (type === "CommentUpdated") {
      const { id, content, postId, status } = data;
  
      const post = posts[postId];
      const comment = post.comments.find((comment) => {
        return comment.id === id;
      });
  
      comment.status = status;
      comment.content = content;
    }
  };
  


app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    console.log(req.body , data, type)
    handleEvent(type, data);
  
    res.send({});
});

app.listen(4042,async () => {
    console.log('Listening on 4042');
    try {
        const res = await axios.get("http://localhost:4005/events");
    
        for (let event of res.data) {
          console.log("Processing event:", event.type);
    
          handleEvent(event.type, event.data);
        }
      } catch (error) {
        console.log(error.message,"this is the error");
      }
});
