'use client'
import Btn from '@/app/components/ui/Btn'
import Input from '@/app/components/ui/Input'
import React from 'react'

const SignUp = () => {

    const handleSubmit = () => {
        console.log('testing 2')
    }

  return (
    <div className='flex flex-col justify-center items-center bg-secondary bg-opacity-45 w-fit rounded-md shadow-sm shadow-black gap-2 p-8'>
        <h4 className='text-center font-bold text-white my-4 text-title'>Sign up</h4>
        {/* Sign up form */}
        <Input type='email' placeholder='Email'/>
        <Input type='text' placeholder='Name'/>
        <Input type='text' placeholder='Last Name'/>
        <Input type='password' placeholder='Password'/>
        <Btn text='Sign up' action={handleSubmit} variant='2'/>

        {/* Log in link */}
        <p className='mt-16'>Already have an account? <a href="/">Log in here</a></p>
    </div>
  )
}

export default SignUp