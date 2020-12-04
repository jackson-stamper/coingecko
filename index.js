const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

//get all todos

//all coins in db listed below
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

app.get("/ethlend", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM ethlend");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/havven", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM havven");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/nxm", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM nxm");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/rarible", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM rarible");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/uma", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM uma");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/uniswap", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM uniswap");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/yearnfinance", async(req,res) => {
    try {
        const allData = await pool.query("SELECT * FROM yearnfinance");
        res.json(allData.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});