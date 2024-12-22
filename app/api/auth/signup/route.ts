import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/mongodb";

export async function POST (req: Request) {

    const {fullname, email, password} = await req.json()

    if(!password || password.length < 6) {
        return NextResponse.json(
            {message: "Password must be at least 6 characters long"},
            {status: 400}
        )
    }

    try {
        await connectDB()
        const userFound = await User.findOne({email}) // this is the same than {email: email}

        if(userFound) {
            return NextResponse.json(
                {message: "Email already in use"},
                {status: 400}
            )
        } else {
    
            const hashPassword = await bcrypt.hash(password, 10)
    
            const newUser = new User({
                fullname,
                email,
                password: hashPassword
            })
    
            const savedUser = await newUser.save()

            return NextResponse.json({
                id: savedUser._id,
                email: savedUser.email,
                fullname: savedUser.fullname,
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }
}