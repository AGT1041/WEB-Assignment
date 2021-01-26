express=require('express');
const app= express();

app.get("/",(req, res)=>{
    console.log("server online");
    res.send(`
    <h1>Press the buttion to send post reqest</h>
    <form action="/req" method="POST">
    <hr>
    <button>Buttion</button>
    </form>
    `);
});

app.post("/req",(req,res)=>{
    res.send("you just did a post request")
})

app.listen(2000);