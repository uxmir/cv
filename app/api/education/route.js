import dbConnect from "../../../utils/Dbconnect/db";
import Education from "../../../models/EducationModel/education";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export const POST = async (req) => {
  await dbConnect();
  try {
    
     const token= req.headers.get("authorization")?.split(" ")[1]
     if(!token){
      return  NextResponse.json({
        success:false,
        messsage:"unauthorized"
      })
     }
     const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const body = await req.json();
    const {
      institute_name,
       passing_year,
       degree,
      traning_institute_name,
      training_passing_year,
      training_duration,
    } = body;
    if (
      !institute_name ||
      !passing_year ||
      !degree ||
      !traning_institute_name||
      !training_passing_year||
      !training_duration
    ) {
      return NextResponse.json({
        success: false,
        messsage: "data is not found",
        error
      });
    }
    const educationData = await Education.create({
      user:new mongoose.Types.ObjectId(decoded.id),
      institute_name,
      passing_year,
      degree,
      traning_institute_name,
      training_passing_year,
      training_duration,
    });
    return NextResponse.json({
        success:true,
        messsage:'data is created',
        educationData
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      messsage: "there is something wrong",
    });
  }
};
//for getting data
export const GET = async (req) => {
  await dbConnect();
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const data = await Education.find({
      user: new mongoose.Types.ObjectId(decoded.id),
    });

   

    return NextResponse.json({
      success: true,
      message: "Education data fetched successfully",
      getEducationData: data,
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
};


//for deleting data
export const DELETE=async(req)=>{
    await dbConnect()
    try {
       const deleteEducationData=await Education.deleteMany() 
       if(!deleteEducationData){
        return NextResponse.json({
            success:false,
            messsage:'data is not deleted'
        })
       }
       return NextResponse.json({
        success:true,
        messsage:'data is deleted',
      deleteEducationData
       })
    } catch (error) {
        return NextResponse.json({
            success:false,
            messsage:'there is something wrong'
        })
    }
}