const express=require('express');
const app=express();
const http= require('http');
const port=8080;
const server=http.createServer(app).listen(port);

app.get('/',(req,res)=>{
    sayHello(req,res);
});


function sayHello(request,response){
    response.send('hello world!');
}
