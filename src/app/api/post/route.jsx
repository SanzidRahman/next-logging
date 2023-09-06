import { connectionSrt } from "@/app/util/db";
import { User } from "@/app/util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
 
let data = []
try {
  await  mongoose.connect(connectionSrt)
  data = await User.find();
  
} catch (error) {
  data ={ success : "false"}
}

    return NextResponse.json({results: data, success: "true"},{status:200})
}

export async function POST(request){
  const payload =  await request.json()
  await mongoose.connect(connectionSrt);
  let user = new User(payload)
  const userData = await user.save()

  return NextResponse.json({result : userData, success: "true"},{status : 200})
}