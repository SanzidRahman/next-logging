import { connectionSrt } from "@/app/util/db";
import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

    let data = [];
    try {
       await mongoose.connect(connectionSrt)
       data = await Product.find()
   } catch (error) {
    data = { success :false}
   }
    return NextResponse.json({results : data, success : 'true'})
}

//statically generate POST method....

// export async function POST(){
  
//     await mongoose.connect(connectionSrt)
//     let product = new Product({
//         name : "sumsung m-20",
//         brand : "samsung",
//         price : "22000",
//         origin: "south koria"
//     });
//     const result = await product.save();
//     return NextResponse.json({result, success : "true"})
// }

//dynamically generated POST method by postman....

export async function POST (request){
    let payload = await request.json()
    await mongoose.connect(connectionSrt)

    let product = new Product(payload);
    //here  new Product means the Product Schema we have made it previously
    let data = await product.save();
   
    return NextResponse.json({results : data, success: "true"})
}