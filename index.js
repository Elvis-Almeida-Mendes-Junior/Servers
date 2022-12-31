const express = require('express');
const server = express();
const port = 3000;

let names = ['elvis', 'bob','gustavo','alexsandro','alex'];

server.get('/main', (req, res) => {

    console.log(`recebi um requisisão ${req}`);

    res.send(`Hello ${names[Math.floor(Math.random() * names.length )]}`);
    

});

server.listen(port, () => {

    console.log(`server listen on port ${port}`);

});