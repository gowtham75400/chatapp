import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profile: {
        type: String,
        default: "",
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
