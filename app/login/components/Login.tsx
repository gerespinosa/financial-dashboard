'use client'
import Btn2 from '@/app/components/ui/Btn2'
import Btn from '@/app/components/ui/Btn'
import Input from '@/app/components/ui/Input'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

function LogIn () {

  const router = useRouter()

  const {data: session} = useSession()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData = new FormData(e.currentTarget);

    try {
        const loginResponse: any = await signIn('credentials', {
            email: newFormData.get('email'),
            password: newFormData.get('password'),
            redirect: false
        })
        
        if(loginResponse.ok) {
            const updatedSession = await getSession()
            console.log(updatedSession?.user)
            router.push(`/${updatedSession?.user._id}/dashboard`)
        }

    } catch (error) {
        console.log(error);
    }
};

const handleGoogleLogin = async () => {
    try {
        const loginResponse: any = await signIn('google', {
            redirect: false,
            callbackUrl: `${session?.user.id}/dashboard`
        })
    } catch (error) {
        console.log(error)
    }
}

return (
    <div className='flex flex-col justify-center items-center bg-secondary bg-opacity-45 w-fit rounded-md shadow-sm shadow-black gap-4 p-8 relative'>
        <h4 className='text-center font-bold text-white my-4 text-title'>Log In</h4>

        {/* Sign up form */}
        <form className='flex flex-col justify-center items-center bg-opacity-45 w-fit gap-2'
        onSubmit={handleSubmit}>
            <Input type='email' placeholder='Email' name='email'/>
            <Input type='password' placeholder='Password' name='password'/>
            <Btn text='Log In' variant='2'/>
        </form>

        {/* Divider */}
        <div className='flex h-[20px] items-center justify-center gap-4'>
            <hr className='w-[175px] h-[2px] bg-white border-none' />
            <span className='text-white font-semibold'>O</span>
            <hr className='w-[175px] h-[2px] bg-white border-none' />
        </div>

        {/* Google login */}
        <Btn2 text='Log in with Google' variant={'3'} action={handleGoogleLogin} path={'/google.svg'}   />

        {/* Sign Up link */}
        <p className='mt-16'>You don't have an account? <a href="/signup" className='text-white font-bold'>Sign Up here</a></p>
    </div>
  )
}

export default LogIn