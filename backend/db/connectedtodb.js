import mongoose from "mongoose";

const connectedtodb = async () => {
    try{
        await mongoose.connect("mongodb+srv://gowthamnk67:UKnu5SDQB8K48BP4@cluster0.wcvon.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Mongo_db connected");
        
    }catch(err){
        console.log("Error from Mongo_db" , err);
    }
}

export default connectedtodb