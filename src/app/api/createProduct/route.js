import { dbConnect } from "@/lib/dbConnect"
import { Cars } from "@/models/cars.model"
import { NextResponse } from "next/server"


export async function POST(req, res) {

    const body = await req.json()
    console.log(body)
    try {
        await dbConnect ()
        const newCar = new Cars({
            title: body.title.toLowerCase(),
            type: body.type.toLowerCase(),
            company: body.company.toLowerCase(),
            dealer: body.dealer.toLowerCase(),
            description: body.description.toLowerCase(),
            images: body.photo,
            owner:body.user
        })
        await newCar.save();

        return NextResponse.json({ success: true, message: 'Car Added successfully' },{status:201})
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message },{status:500})
    }
}