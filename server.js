const express = require("express")
const app = express();
const budget = require("./models/budget.js")

//middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false }));


app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs")
  })

app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets");
  })

app.get("/", (req, res)=>{
    res.send("Budgtr App");
});

app.get("/budgets", (req, res)=>{
    res.render("index.ejs", {
        budget,
    })
})

app.get("/budgets/:id", (req, res)=>{
    res.render("show.ejs", {
      budget: budget[req.params.id]
    });
});




app.listen(3013, ()=>{
    console.log("living")
});
