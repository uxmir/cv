import mongoose from "mongoose";
const SkillSchema=new mongoose.Schema({
  
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Auth",
    required:true
  },
  designation_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    experience_year: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    best_project: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    project_url: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    project_description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }  
)
const Skill= mongoose.models.Skill || mongoose.model("Skill",SkillSchema)
export default Skill
