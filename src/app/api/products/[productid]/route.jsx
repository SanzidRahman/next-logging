import { connectionSrt } from "@/app/util/db";
import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async  function PUT(request,content){
    const productId =content.params.productid
    const filter ={_id : productId}
    const payload = await request.json();

    await mongoose.connect(connectionSrt)
    const result = await Product.findOneAndUpdate(filter, payload)
    

     return NextResponse.json({result, success : "true"})
}