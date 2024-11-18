import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model"
import { NextResponse } from "next/server"


export async function POST (req,res){
    const body = await req.json()

    if(!body){
        return NextResponse.json({success:false,message:'Data not found'},{status:400})
    }
    try {
        await dbConnect()
        const res = await Cars.findByIdAndUpdate(
            body.id,
            {
                title:body.title,
                type:body.type,
                company:body.company,
                dealer:body.dealer,
                description:body.description,
                images:body.images
            }
        )
        if(res){
            return NextResponse.json({success:true,message:'Success'},{status:201})
        }
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:500})
    }
}