'use client'
import React from 'react'
import Avatar from './ui/Avatar'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Sidebar = () => {

    const router = useRouter()

  return (
    <div className='w-[75px] h-[100vh] flex flex-col justify-end py-8 px-2'>
        
        <div className='flex flex-col gap-4'>
            {/* Avatar or fullname first letter */}
            <Avatar />
            {/* Logout btn */}
            <Image 
            src='/logout.svg' 
            alt='logout'
            width={20}
            height={20}
            onClick={() => router.push('/api/auth/signout')}
            className='mx-auto' />
        </div>
    </div>
  )
}

export default Sidebar