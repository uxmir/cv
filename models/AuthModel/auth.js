import mongoose from "mongoose";
const resumeUserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },  
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
        password:{
        type:String, 
        required:true,
    }
})
const Auth=mongoose.models.Auth || mongoose.model('Auth',resumeUserSchema)
export default Auth;