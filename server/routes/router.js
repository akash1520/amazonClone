const express = require("express");
const router = new express.Router()
const Products = require("../models/productsSchema")

router.get("/getproducts",async(req,res)=>{
    try {
        const productsdata= await Products.find();
        // console.log("new data"+productsdata)
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error"+ error.message)
    }
})

router.get("/getproductsone/:id",async(req,res)=>{
    try {
        const {id}=req.params

        const individualData= await Products.find({id:id})
        res.status(201).json(individualData)
        console.log(id)
    } catch (error) {
        console.log("error",error.message)
    }
})

module.exports = router;