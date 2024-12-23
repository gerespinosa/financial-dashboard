'use client'
import React from 'react'
import {useSession} from 'next-auth/react'

const page = () => {

    const {data: session, status} = useSession()
    console.log(session)
  return (
    <div>
      {/* Greetings message */}
      <h2 className='text-title text-secondary font-semibold'>
        <span className='text-primary font-normal'>Hello, </span>
        {session?.user?.name ? session.user.name.split(' ')[0] : session?.user.fullname.split(' ')[0]}
      </h2>   
    </div>
  )
}

export default page