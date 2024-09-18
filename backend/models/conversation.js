import mongoose  from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        }
    ],  
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
},
//create and update => we can see the time stamp in db
{timestamps: true}
)


const Conversation = mongoose.model("Conversation",conversationSchema)

export default Conversation