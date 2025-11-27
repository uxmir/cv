import dbConnect from "../../../utils/Dbconnect/db";
import Skill from "../../../models/SkillModel/Skill";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
export const POST = async (req) => {
  await dbConnect();
  try {
    //getting tokwen for creating user based data
    const token=req.headers.get("authorization")?.split(" ")[1]
    if(!token){
      return NextResponse.json({
        success:false,
        message:'token is not found'
      })
    }
    //verifing jwt by token
    const decoded= jwt.verify(token,process.env.JWT_SECRET)

    const body = await req.json();
    const {
      designation_name,
      company_name,
      experience_year,
      best_project,
      project_url,
      project_description,
    } = body;
    if (
      !designation_name ||
      !company_name ||
      !experience_year ||
      !best_project ||
      !project_url ||
      !project_description
    ) {
      return NextResponse.json({
        success: false,
        message: "data is not created",
      });
    }
    const skillData = await Skill.create({
      user:new mongoose.Types.ObjectId(decoded.id),
      designation_name,
      company_name,
      experience_year,
      best_project,
      project_url,
      project_description,
    });
    return NextResponse.json({
      success: true,
      message: "data is created",
      skillData,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "there is something wrong",
    });
  }
};
//for getting alldata
export const GET=async(req)=>{
  await  dbConnect()
  //creating token for getting user based data
  const token=req.headers.get("authorization")?.split(" ")[1]
  if(!token){
    return NextResponse.json({
      success:false,
      message:'token is not found'
    })
  }
  const decoded=jwt.verify(token,process.env.JWT_SECRET)
    try {
      const data=await Skill.find({user:new mongoose.Types.ObjectId(decoded.id)})
      // if(!getSkillData){
      //   return NextResponse.json({
      //       success:false,
      //       message:'data is not found'
      //   })
      // } 
      return NextResponse.json({
        success:true,
        message:'data is found',
        getSkillData:data
      }) 
    } catch (error) {
      return NextResponse.json({
        success:false,
        message:'there is no data'
      })  
    }
}
