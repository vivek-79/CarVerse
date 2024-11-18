import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model"
import { NextResponse } from "next/server"


export async function GET (req,res){

    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id') || ''
    console.log(id)

    if(!id){
        return NextResponse.json({success:true,message:'id not found'},{status:500})
    }

    try {
        await dbConnect()

        const res = await Cars.findById(id)
        if(!res){
            throw new Error('No car found')
        }
        return NextResponse.json({success:true,message:'Success',res},{status:200})
    } catch (error) {
        return NextResponse.json({success:true,message:error.message},{status:500})
    }
}