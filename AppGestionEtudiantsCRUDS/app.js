
const express = require("express");
const app = express()
app.use(express.static("public/img"));
app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.get("/", (req,res) => {
    const titre = "Express";
    res.render("index.ejs", {titre: "Express avec EJS",
    });
   });
   
   app.get("/cours/:num/desc",(req, res) =>
   {
       res.render('course_description.ejs', {number: req.params.num});
   
   });

app.get('/student', function(req, res) {
    res.render("student.ejs");
});

app.get('/examen', function(req, res) {
    res.render("examen.ejs");
});

app.get("/student/list", function(req, res)
{
    res.render("studentlist.ejs");

});



app.listen(3000, () => {
    console.log("Server is Running")
})

