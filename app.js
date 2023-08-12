const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the node js application');
})

const port = process.env.PORT || 3002;

app.listen(port, ()=>{
    console.log('Server is listening on:', port);
});