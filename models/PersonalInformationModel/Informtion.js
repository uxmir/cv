import mongoose from "mongoose";
const informationSchema=new mongoose.Schema({
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Auth",
     required:true
    },
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
       professonal_name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
        location:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    number:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
        gmail:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
        career_description:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
},{timestamps:true})

const Information= mongoose.models.Information || mongoose.model("Information", informationSchema)
export default Information;

    