/* Exrcice 1

const express = require("express");
const app = express()
app.get('/student', function(req, res) {
res.send("bonjour");
});
app.listen(3000, () => {
console.log("Server is Running")
})*/



// Exrcice 2- routage statique

/*const express = require("express");
const app = express()
app.get('/', function(req, res) {
res.send("bonjour, la date d'aujourd'hui:\t"+Date());
});
app.get('/student', function(req, res) {
    res.send("envoie des informations");
    });

app.use((req, res) => {
            res.type('text/plain')
            res.status(404)
            res.send('404 - Not Found')
          })
app.listen(3000, () => {
console.log("Server is Running")
})*/


// Exercice 3 - nRoutage dynamique
/*
const express = require("express");
const app = express()
app.get('/', function(req, res) {
res.send("bonjour, la date d'aujourd'hui:\t"+Date());
});
app.get('/student', function(req, res) {
    res.send("envoie des informations");
    });

app.get('/cours/:num/descr', function(req, res) {
        res.send("Vous avez demandé le cours numéro"+ req.params.num);
        });

app.use((req, res) => {
            res.type('text/plain')
            res.status(404)
            res.send('404 - Not Found')
          })
app.listen(3000, () => {
console.log("Server is Running")
})*/


// Exercice 4
const express = require("express");
const app = express()
app.use(express.static("public/img"));
app.use(express.static("public/css"));
app.get("/", (req,res) => {
    const titre = "Express";
    res.render("index.ejs", {
    titre: "Express avec EJS",
    });
    });
app.get('/student', function(req, res) {
    res.send("envoie des informations");
    });

app.get('/cours/:num/descr', function(req, res) {
        res.send("Vous avez demandé le cours numéro"+ req.params.num);
        });

app.use((req, res) => {
            res.type('text/plain')
            res.status(404)
            res.send('404 - Not Found')
          })
app.listen(3000, () => {
console.log("Server is Running")
})
