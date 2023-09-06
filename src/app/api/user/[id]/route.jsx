import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    
    
    const userData =user.filter((item)=> item.id == content.params.id)
    return NextResponse.json( userData.length ==0 ? {result : 'data has been not found', success: "false"} : {results : userData[0],success: 'true'},{status: 200})
}

export async function PUT(request,content){
   let payload = await request.json()
//    cinst userId = content.params.id;
  payload.id = content.params.id;
   
  if (!payload.name || !payload.email ){
    return NextResponse.json({results : "required not fullfilled", success : "false"},{status :400})

  }else{

      return NextResponse.json({results :payload, success : "true"},{status :200})
  }

}