const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

//get all todos
app.get("/ethereum", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM ethereum");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/chainlink", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM chainlink");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});