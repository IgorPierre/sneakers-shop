const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "olhosdelee21",
    database: "sneakersshop",
});

let value = 3

app.use(cors());
app.use(express.json());

app.get("/getProducts", (req, res)  => {
    let SQL = "SELECT * FROM sneakersshop.sneakers";

    db.query(SQL, (err, result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, ()=> {
    console.log("rodando servidor");
})
