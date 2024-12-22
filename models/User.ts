import mongoose, { model, models, Schema } from "mongoose";

const UserSchema = new Schema ({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please fill a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    image: {
        type: String,
        required: false
    }
})

const User = models.User || model("User", UserSchema)
export default User