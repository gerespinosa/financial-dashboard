import { model, models, Schema } from "mongoose";
import TransactionSchema from "./Transaction";

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
    image: {
        type: String,
        required: false
    },
    transactions: {
        type: [TransactionSchema],
        required: false
    },
    provider: { 
        type: String, 
        required: true 
    }, // 'google' or 'credentials'
    password: {
      type: String,
      select: false,
      required: function () {
        return this.provider === "credentials";
      },
    },
}, {
    timestamps: true
})

const User = models.User || model("User", UserSchema)
export default User