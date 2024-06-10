"use strict"
const socket = io();

const nick= document.querySelector('#nick')
const list= document.querySelector('.chat-list')
const chatting= document.querySelector('.chatting')
const send= document.querySelector('.send')
const dp= document.querySelector('.dp')

function sen(){const param={name:nick.value, msg:chatting.value}
socket.emit("chatting",param); chatting.value='' }
chatting.addEventListener('keypress',e=>{if(e.keyCode===13){sen()}})
send.addEventListener('click', sen)

socket.on('chatting',ta=>{const {name,msg,time}=ta;
pio(name,msg,time);
dp.scrollTo(0,dp.scrollHeight)
})
function pio(name,msg,time) {
const li=document.createElement('li'); 
li.classList.add(nick.value===name?'sent':'received');
const dom=`<span class="pro"><span class="cli">${name}</span>
<img src="https://picsum.photos/50/50/" alt="any">
</span>
<span class="mg">${msg}</span><span class="time">${time}</span>`;
li.innerHTML=dom;list.appendChild(li) }

