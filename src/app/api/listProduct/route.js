import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model"
import { NextResponse } from "next/server"


export async function GET (req,res){

    const {searchParams} = new URL(req.url)
    const userId = searchParams.get('userId')

    if(!userId){
        throw new Error('user not found')
    }
    try {
        await dbConnect();

        const cars =await Cars.find({owner:userId}).select('-dealer -description -owner -type')
        return NextResponse.json({success:true,message:'Fetched successfully',cars},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:500})
    }
    
}