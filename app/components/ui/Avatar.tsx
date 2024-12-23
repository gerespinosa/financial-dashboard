'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Avatar = () => {

    const {data: session} = useSession()

  return(
    <>
    {session?.user?.image ? (
      <Image
        src={session.user.image}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full mx-auto"
      />
    ) : (
      <div className="bg-primary rounded-full w-[40px] h-[40px] mx-auto shadow-black shadow-md flex justify-center items-center p-4">
        <h4 className="text-title text-white font-bold">
          {session?.user?.fullname[0]?.toUpperCase()}
        </h4>
      </div>
    )}
  </>
  )
}

export default Avatar