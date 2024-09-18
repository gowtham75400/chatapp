import User from "../models/user.model.js";


export const getUsersforSidebar = async (req, res) => {
    try {
        const loggedUseer = req.user._id
        const filteruser = await User.find({_id : {$ne : loggedUseer}})

        res.status(200).json(filteruser)
    } catch (error) {
        console.log("Error from getUsersforSidebar",error);
        res.status(400).json({ error: "Internal server error" });
    }
};

export default getUsersforSidebar