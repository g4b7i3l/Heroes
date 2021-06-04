const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');
app.use(express.static('public'));
const views = path.join(__dirname,'dh-heroes','views')

app.get('/',(req,res)=>res.sendFile(path.join(views,'index.html')));
app.get('/saitama',(req,res)=>res.sendFile(path.join(views,'saitama.html')));
app.get('/itachi',(req,res)=>res.sendFile(path.join(views,"itachi.html")));
app.get('/bmo',(req,res)=>res.sendFile(path.join(views,"bmo.html")));
app.get('/pedro',(req,res)=>res.sendFile(path.join(views,"pedro.html")));
app.get('/shinra',(req,res)=>res.sendFile(path.join(views,"shinra.html")));
app.get('/levi',(req,res)=>res.sendFile(path.join(views,"levi.html")));
app.get('/itodori',(req,res)=>res.sendFile(path.join(views,"itodori.html")));





app.listen(port,()=>console.log("Servidor corriendo en el puerto "+port));
