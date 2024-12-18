import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { signOut } from "next-auth/react";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async jwt({token, account}){
            if(account){
                token.accessToken = account.access_token
            }
            return token
        },
        async session({session, token, user}){
            session.accessToken = token.accessToken
            return session
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };