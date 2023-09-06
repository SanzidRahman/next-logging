import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;

    
    return NextResponse.json({result : data, success: "true"},{status: 200})
}



export async function POST (request){
    const payload =  await request.json() 

    if (!payload.name || !payload.age || !payload.email){

        return NextResponse.json({results : "required not fullfilled",success : 'true'}, {status :401})
    }else{
        return NextResponse.json({results : "New User has been created", success: "true"}, {status :200})
    }

}