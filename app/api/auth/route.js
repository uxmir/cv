import dbConnect from "../../../utils/Dbconnect/db";
import Auth from "../../../models/AuthModel/auth";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
//creatng user
export const POST=async(req)=>{
    await dbConnect()
    try {
      const body=await req.json()
      const {name,email,password}=body;
      if(!name || !email || !password){
      return NextResponse.json({
        success:false,
        message:'any data is not found'
      })
      }  
      //checking user
      const existing= await Auth.findOne({email})
      if(existing){
        return NextResponse.json({
            success:false,
            message:'this email is registered'
        })
      }
      //hashing password
      const salt=bcrypt.genSaltSync(10)
      const hashedPassword= await bcrypt.hash(password,salt)
      //creating user
     const newUser=await Auth.create({name,email,password:hashedPassword})
     //creating jwt token
     const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'7d'})
     return NextResponse.json({
        success:true,
        message:'user created successfuly',
        token,
        user:{id:newUser._id,name:newUser.name, email:newUser.email}
     })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'there is something wrong'
        })
    }
}
