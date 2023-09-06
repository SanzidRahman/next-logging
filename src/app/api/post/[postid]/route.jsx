import { connectionSrt } from "@/app/util/db";
import { User } from "@/app/util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){
    const postId =content.params.postid;
    const filter ={_id : postId}
    const payload = await request.json();
    await mongoose.connect(connectionSrt);

    const updated = await User.findOneAndUpdate(filter, payload)



    return NextResponse.json({results : updated , success : "true"})
}