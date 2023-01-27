require("dotenv").config()
const express = require("express")
const app = express()
const mongoose=require("mongoose")
require("./db/conn.js")
const cors = require("cors")
const Products=require("./models/productsSchema")
const DefaultData= require("./DefaultData")
const router = require("./routes/router.js")

app.use(express.json())
app.use(cors())
app.use(router)

const port = 8005;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
})

DefaultData()