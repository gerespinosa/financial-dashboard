'use client'
import Btn from '@/app/components/ui/Btn'
import Input from '@/app/components/ui/Input'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import { signIn } from 'next-auth/react'

function LogIn () {

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newFormData = new FormData(e.currentTarget)

    try {
        const loginResponse: any  = await signIn('credentials', {
            // This is what I use to log in the user
            email: newFormData.get('email'),
            password: newFormData.get('password'),
            redirect: false
        } )

        if(loginResponse.ok){
            router.push('/dashboard')
        }
        
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className='flex flex-col justify-center items-center bg-secondary bg-opacity-45 w-fit rounded-md shadow-sm shadow-black gap-2 p-8'>
        <h4 className='text-center font-bold text-white my-4 text-title'>Log In</h4>

        {/* Sign up form */}
        <form className='flex flex-col justify-center items-center bg-opacity-45 w-fit gap-2'
        onSubmit={handleSubmit}>
            <Input type='email' placeholder='Email' name='email'/>
            <Input type='password' placeholder='Password' name='password'/>
            <Btn text='Log In' variant='2'/>
        </form>

        {/* Sign Up link */}
        <p className='mt-16'>You don't have an account? <a href="/signup" className='text-white font-bold'>Sign Up here</a></p>
    </div>
  )
}

export default LogIn