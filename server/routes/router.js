const express = require("express");
const router = new express.Router()
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");

router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("new data"+productsdata)
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error" + error.message)
    }
})

router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params

        const individualData = await Products.find({ id: id })
        res.status(201).json(individualData)
        console.log(id)
    } catch (error) {
        console.log("error", error.message)
    }
})

//register data
router.post("/register", async (req, res) => {
    const {
        fname,
        email,
        mobile,
        password, 
        cpassword
    } = req.body
    if(!fname || !email || !mobile ||!password || !cpassword){
        res.status(400).json({error:"Fill all the data"})
        console.log("User didn't provide proper data")
    }

    try {
        const preUser = await USER.findOne({email:email})
        
        if(preUser){
            res.status(409).json({Error:"This user is already present"})
        }else if(password!=cpassword){
            res.status(422).json({Error:"Passwords don't match"})
        }else{
            const finalUser= new USER({
                fname,email,mobile,password,cpassword
            })

            //password hashing process

            const storedata = await finalUser.save()
            console.log(storedata)
            res.status(201).json(storedata)
            

        }

    } catch (error) {
        
    }
})

module.exports = router;