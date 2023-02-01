const express = require("express");
const router = new express.Router()
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");

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

router.post("/login", async(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        res.status(400).json({error:"Wrong details, fill it properly"})
    }

    try {
        const  userLogin = await USER.findOne({email:email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            // console.log(isMatch)

            //token generation
            const token = await userLogin.generateAuthtoken()
            // console.log(token);

            //cookie generation
            res.cookie("AmazonWeb", token, {
                expires:new Date(Date.now()+900000),
                httpOnly:true
            })
            
            if(!isMatch){
                res.status(400).json({error:"Wrong password, please enter the correct password"})
            }else{
                res.status(200).json({message:"Password match"})
            }

        }else{
            res.status(400).json({error:"Invalid Details"})
        }
    } catch (error) {
        res.status(400).json({error:"Invalid details"})
    }

})

router.post("/addcart/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const cart = Products.findOne({id:id})
    } catch (error) {
        
    }
})

module.exports = router;