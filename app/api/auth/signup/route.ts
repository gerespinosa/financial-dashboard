import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/mongodb";

export async function POST (req: Request) {

    const {fullname, email, password, provider} = await req.json()

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

            let newUser;

            if (provider === "credentials") {
              const hashPassword = await bcrypt.hash(password, 10);
              newUser = new User({
                fullname,
                email,
                password: hashPassword,
                provider: "credentials",
              });
            } else if (provider === "google") {
              newUser = new User({
                fullname,
                email,
                provider: "google",
              });
            } else {
              return NextResponse.json(
                { message: "Invalid provider" },
                { status: 400 }
              );
            }
        
            const savedUser = await newUser.save();

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