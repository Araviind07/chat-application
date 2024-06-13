import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async(req,res) =>{
    try {

        const {message} = req.body;
        const { recieverId} = req.params;
        const senderId = req.user._id
        
       let conversation = await Conversation.findOne({
            participants:{ $all:[senderId,recieverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,recieverId],
            });
        };

        const newMessage = new Message({
            senderid,
            recieverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        };

        await conversation.save();
        await newMessage.save();

        res.status(201).json(newMessage);


    } catch (error) {
        res.status(500).json({error: " Internal Server Error"});
    
         
    }
    console.log("Message sent", req.params.id);
};  

export const getMessages = async(req,res) => {
    try {

        const {id:userTochatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChatid]},
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([])
        };

        const messages = conversation.messages;
        res.status(200).json(messages);
        
    } catch (error) {
        res.status(500).json({error: " Internal Server Error"});
    }
}