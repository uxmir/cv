import dbConnect from "../../../../utils/Dbconnect/db";
import Auth from "../../../../models/AuthModel/auth";
import { NextResponse } from "next/server";

export const DELETE=async(req,{params})=>{
await dbConnect()
try {
    const {id}=await params;
    const deletedData= await Auth.findByIdAndDelete(id)
    if(!deletedData){
        return NextResponse.json({
            success:false,
            message:"data is not deleted",

        })
    }
    return NextResponse.json({
        success:true,
        message:"data is deleted",
        deletedData
    })
} catch (error) {
   console.error("There is something wrong",error) 
}
}