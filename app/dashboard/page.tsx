'use client'
import React from 'react'
import {useSession} from 'next-auth/react'

const page = () => {

    const {data: session, status} = useSession()

    console.log(session)
  return (
    <div>
        <h1>dashboard page</h1>
        <h2>{session?.user?.email}</h2>
    </div>
  )
}

export default page