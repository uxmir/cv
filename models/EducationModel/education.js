import mongoose from "mongoose";
const educationSchema = new mongoose.Schema(
  {
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Auth",
    required:true
    },
    institute_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    passing_year: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    degree: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    traning_institute_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    training_passing_year: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    training_duration: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Education =
  mongoose.models.Education || mongoose.model("Education", educationSchema);
export default Education;
