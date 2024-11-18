import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model"
import { NextResponse } from "next/server"


export async function DELETE(req,res){
    const {searchParams} = new URL(req.url,`http://${req.headers.host}`)
    const id = searchParams.get('id')
    console.log(id)
    if(!id){
        return NextResponse.json({success:false,message:'Id not found'},{status:400})
    }
    try {
        await dbConnect();
        const res = await Cars.findByIdAndDelete(id)
        if(res){
            return NextResponse.json({success:true,message:'Deleted successfully'},{status:201})
        }
        else {
            return res.status(404).json({ success: false, message: 'Car not found' });
        }
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:500})
    }
}