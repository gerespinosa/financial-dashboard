'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Btn2 from '../components/ui/Btn2'

const page = () => {

    const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
        <h2>Are you sure you want to log out?</h2>
        <div className='flex gap-4'>
            <Btn2 text='Yes' variant='1' action={() => signOut({
                callbackUrl: '/login'
            })}/>
            <Btn2 text='No' variant='1' action={() => {
                router.push('/dashboard')
            }}/>
        </div>

    </div>
  )
}

export default page