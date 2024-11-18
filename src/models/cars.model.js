

import mongoose,{Schema} from "mongoose";

const carSchema = new Schema({
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        requires:true,
        default:''
    },
    type:{
        type:String,
        required:true,
        default:''
    },
    company:{
        type:String,
        required:true,
        default:''
    },
    dealer:{
        type:String,
        required:true,
        default:''
    },
    description:{
        type:String,
        required:true,
        default:''
    },
    images:[
        {
            type:String,
            default:''
        }
    ]
}, { timestamps: true })

export const Cars = mongoose.models.Cars || mongoose.model('Cars',carSchema)