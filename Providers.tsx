'use client'
import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "./types"

function Providers({children}: ProviderProps) {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Providers