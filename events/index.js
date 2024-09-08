const express = require('express')
const app = express()
const axios = require('axios')
const bodyPareser = require('body-parser')


app.use(bodyPareser.json())

const events = [];

app.post('/events',(req,res)=>{
    const event = req.body

    events.push(event);
    console.log(events,"fffffffffffffffffffffffffffffffffffffffffffff,",event)

    axios.post('http://localhost:4041/events',event).catch((err) => {
        console.log(err.message);
      });
    axios.post('http://localhost:4040/events',event).catch((err) => {
        console.log(err.message);
      });
    axios.post('http://localhost:4042/events',event).catch((err) => {
        console.log(err.message);
      });
      axios.post('http://localhost:4043/events',event).catch((err) => {
        console.log(err.message);
      });
    res.send({status: 'OK'})

})
app.get("/events", (req, res) => {
    console.log("here",req)
    res.send(events);
  });

app.listen(4005,()=>{
    console.log('Listening on 4005')
})

