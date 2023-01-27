const express = require("express");
const router = new express.Router()
const Products = require("../models/productsSchema")

router.get("/getproducts",async(req,res)=>{
    try {
        const productsdata= await Products.find();
        // console.log("new data"+productsdata)
        res.status(200).json(productsdata)
    } catch (error) {
        console.log("error"+ error.message)
    }
})

module.exports = router;