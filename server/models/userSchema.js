const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secretKey= process.env.SECERT_KEY

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                console.log("Not valid Email Address")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true, //this also must be unique even if the email doesn't match    
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    carts: Array
});

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,14)
        this.cpassword= await bcrypt.hash(this.cpassword,14)
    }

    next()
})

//token generate

userSchema.methods.generateAuthtoken = async function(){
    try {
        let token = jwt.sign({_id:this._id},secretKey)
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token
    } catch (error) {
        console.log(error)
    }
}


const USER = mongoose.model("USER", userSchema)
module.exports = USER;

