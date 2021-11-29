const express = require('express');
const port = process.env.PORT||8000;
const app = express();


//enviar uma variavel que deu de resultado
//em uma funçao depois do cliente ter dado um valor

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.listen(port, ()=>{console.log('Our App Is Up And Running');});
module.exports = app;