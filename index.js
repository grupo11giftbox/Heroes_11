const express = require('express');

const app = express();

const path = require("path");

app.listen(3030, () => console.log("Serv. Escuchando"));
app.use(express.static('DH-Heroes/public'));
//app.use(express.static('public/img'));


app.get("/", (_req, res) => {
let htmlIndex = path.join(__dirname, './DH-Heroes/views/index.html');

res.sendFile(htmlIndex);

});

app.get("/babbage", (_req, res) => {
    let htmlBabbage = path.join(__dirname, './DH-Heroes/views/babbage.html');
    
    res.sendFile(htmlBabbage);
    
    });
    
app.get("/berners-lee", (_req, res) => {

    let htmlBernerslee = path.join(__dirname, './DH-Heroes/views/berners-lee.html');
        
    res.sendFile(htmlBernerslee);
        
});

app.get("/clarke", (_req, res) => {

    let htmlClarke = path.join(__dirname, './DH-Heroes/views/clarke.html');
        
    res.sendFile(htmlClarke);
        
});

app.get("/hamilton", (_req, res) => {

    let htmlHamilton = path.join(__dirname, './DH-Heroes/views/Hamilton.html');
        
    res.sendFile(htmlHamilton);
        
});

app.get("/hopper", (_req, res) => {

    let htmlHopper = path.join(__dirname, './DH-Heroes/views/Hopper.html');
        
    res.sendFile(htmlHopper);
        
});

app.get("/lovelace", (_req, res) => {

    let htmlLovelace = path.join(__dirname, './DH-Heroes/views/lovelace.html');
        
    res.sendFile(htmlLovelace);
        
});

app.get("/turing", (_req, res) => {

    let htmlTuring = path.join(__dirname, './DH-Heroes/views/turing.html');
        
    res.sendFile(htmlTuring);
        
});

