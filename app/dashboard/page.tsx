'use client'
import React from 'react'
import {useSession } from 'next-auth/react'
import LogoutBtn from '../components/LogoutBtn'
const page = () => {

  const {data: session} = useSession()

  return (
    <>
      <div>{session?.user?.name}</div>
      <LogoutBtn/>
    </>
  )
}

export default page