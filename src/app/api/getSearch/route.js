import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model";
import { NextResponse } from "next/server"


export const GET = async (req,res)=>{

    await dbConnect();
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('query')
    
    try {
        const cars = await Cars.find({
            $or: [
              { title: { $regex: query, $options: 'i' } }, 
              { company: { $regex: query, $options: 'i' } },
              { dealer: { $regex: query, $options: 'i' } },
              { description: { $regex: query, $options: 'i' } },
              { type: { $regex: query, $options: 'i' } },
            ],
          });
      
        return NextResponse.json({success:true,cars},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:500})
    }
}