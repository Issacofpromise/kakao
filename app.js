const express = require('express');
const http=require('http');
const app = express();
const path = require('path')
const server = http.createServer(app)
const socketIo = require('socket.io')
const io = socketIo(server) 
const moment = require('moment')
const PORT=process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`server is running ${PORT}`) );

app.use(express.static(path.join(__dirname, 'src')));
app.get('/src/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/css/style.css'));
  });
  
  io.on('connection', (socket) => {socket.on('chatting', da =>{ console.log(da)
    const {name,msg}=da;   
    io.emit('chatting',{name,msg,time: moment(new Date()).format('h:mm A')})})})
    