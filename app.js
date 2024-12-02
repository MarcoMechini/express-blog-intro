const express = require('express');
const post = require('./data');
const app = express();
const port = 3000;

app.use(express.static("public"));

//nella route default risponde server del mio blog
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

//nella route bacheca abbiamo come risposta un json che ha come parametri post e la lunghezza
app.get(`/bacheca`, (req, res) => {
    res.json({
        posts: post.data,
        length: post.data.length,
    })

})

//logga server in ascolto su terminale
app.listen(port, () => {
    console.log('Server in ascolto');
})