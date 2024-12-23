import NextAuth from "next-auth";
import {connectDB} from '@/lib/mongodb'
import User from "@/models/User";
import bcrypt from 'bcryptjs'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env

const handler = NextAuth({
    providers: [
        CredentialsProvider({   
            name: 'Credentials',
            credentials: {
                email: {label: "email", type: "email", placeholder: "email"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                await connectDB();
                const userFound = await User.findOne({
                  email: credentials?.email,
                }).select("+password"); // add the password field to the query which is avoided by default in the User model
        
                if (!userFound) throw new Error("Invalid credentials");
        
                const passwordMatch = await bcrypt.compare(
                  credentials!.password,
                  userFound.password
                );
        
                if (!passwordMatch) throw new Error("Invalid credentials");
        
                console.log(userFound);
        
                return userFound;
              },
        }
    ),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID as string,
            clientSecret: GOOGLE_CLIENT_SECRET as string    
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
          if (account?.provider === 'google') {
            await connectDB();
            const existingUser = await User.findOne({ email: user.email });
      
            if (!existingUser) {
              // Crear usuario si no existe
              const newUser = new User({
                fullname: user.name,
                email: user.email,
                provider: 'google',
              });
              await newUser.save();
            }
          }
          return true;
        },
        async jwt({ token, user }) {
          if (user) token.user = user;
          return token;
        },
        async session({ session, token }) {
          session.user = token.user as any;
          return session;
        },
      },
      pages: {
        signIn: '/login',
        signOut: '/signout',
      }
})

export {handler as GET, handler as POST}