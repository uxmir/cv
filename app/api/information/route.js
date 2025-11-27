import mongoose from "mongoose";
import dbconnect from "../../../utils/Dbconnect/db";
import Information from "../../../models/PersonalInformationModel/Informtion";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  await dbconnect();
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({
        success: false,
        messsage: "Token is not found",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded ID in POST:", decoded.id);

    const body = await req.json();
    const { name, professonal_name, location, number, gmail, career_description } = body;

    if (!name || !professonal_name || !location || !number || !gmail || !career_description) {
      return NextResponse.json({
        success: false,
        messsage: "All fields are required",
      });
    }

    const informationData = await Information.create({
      user:new mongoose.Types.ObjectId(decoded.id), // user id from token
      name,
      professonal_name,
      location,
      number,
      gmail,
      career_description,
    });

    return NextResponse.json({
      success: true,
      messsage: "Data created successfully",
      informationData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      messsage: "Something went wrong",
    });
  }
};

export const GET = async (req) => {
  await dbconnect();
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({
        success: false,
        messsage: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded ID in GET:", decoded.id);

       const data = await Information.find({ user: new mongoose.Types.ObjectId(decoded.id) });

    return NextResponse.json({
      success: true,
      messsage: "Data fetched successfully",
      getInformationData: data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      messsage: "Something went wrong",
    });
  }
};
