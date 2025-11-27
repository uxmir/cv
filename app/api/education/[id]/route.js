import dbConnect from "../../../../utils/Dbconnect/db";
import Education from  '../../../../models/EducationModel/education'
import { NextResponse } from "next/server";
export const DELETE=async(req,{params})=>{
    await dbConnect()
    try {
      
      const {id}= await params
      const deletedData=await Education.findByIdAndDelete(id);
      if(!deletedData){
      return NextResponse.json({
       success:false,
        message:'deleted data is found',
      })
      }
     return NextResponse.json({
        success:true,
        message:'data is deleted',
        deletedData
     })
    } catch (error) {
      return NextResponse.json({
        success:false,
        message:'there is something wrong'
      })
    }
}

//for updateingdata
export const PUT=async(req,{params})=>{
    await dbConnect()
    try {
        const {id}=await params;
        const body= await req.json()
        const updatedData= await Education.findByIdAndUpdate(id,body,{new:true})
        if(!updatedData){
            return NextResponse.json({
                success:false,
                message:'data is not updated'
            })
        }

        return NextResponse.json({
            success:true,
            message:'data is updated',
            updatedData
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'there is something wrong'
        })
    }
}