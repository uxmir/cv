import dbConnect from "../../../utils/Dbconnect/db";
import Auth from "../../../models/AuthModel/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await dbConnect();

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "email or password is not found",
      });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "user is not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Compare result:", isMatch);

    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "password is not matched",
      });
    }
    // create token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      success: true,
      message: "login is successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({
      success: false,
      message: "there is something wrong",
    });
  }
};
