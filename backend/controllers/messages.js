import Conversation from "../models/conversation.js"
import Message from "../models/message.js"

export const sendMessages = async(req,res) => { 
    
        try{
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
            participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(200).json( newMessage)
    }catch(error){
        console.log("Error from SendMessages" , error)
        res.status(400).json({error:"Invalid server Error"})
    }
    // console.log("Send Message" , req.params.id); //req.params.id => it shows user id  (send Message __123)
}

export const getMessage = async(req,res) => {
    try{

        const {id:userchatId} = req.params
        const serverId = req.user._id

        const conversation = await Conversation.findOne({
            participants : {$all : [serverId , userchatId]}
        }).populate("messages") //populate => [ {1},{2} ] using for populate   // not refernce but actual messages

        if(!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages)
    }catch(error){
        console.log("Error from getMessage");
        res.status(400).json({error: "Internal server error"})
    }
}

export default sendMessages