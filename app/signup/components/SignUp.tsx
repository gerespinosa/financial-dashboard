'use client'
import Btn from '@/app/components/ui/Btn'
import Input from '@/app/components/ui/Input'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'

function SignUp () {

    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newFormData = new FormData(e.currentTarget)

        // Make a POST request to the server
        try {
            const response = await axios.post('/api/auth/signup', {
                email: newFormData.get('email'),
                fullname: newFormData.get('name')+ ' ' + newFormData.get('lastname'),
                password: newFormData.get('password')
            })

            const signUpResponse: any  = await signIn('credentials', {
                // This is what I use to log in the user
                email: response.data.email,
                password: newFormData.get('password'),
                redirect: false
            } )

            if(signUpResponse.ok){
                router.push('/dashboard')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex flex-col justify-center items-center bg-secondary bg-opacity-45 w-fit rounded-md shadow-sm shadow-black gap-2 p-8'>
        <h4 className='text-center font-bold text-white my-4 text-title'>Sign up</h4>

        {/* Sign up form */}
        <form className='flex flex-col justify-center items-center bg-opacity-45 w-fit gap-2'
        onSubmit={handleSubmit}>
            <Input type='email' placeholder='Email' name='email'/>
            <Input type='text' placeholder='Name' name='name'/>
            <Input type='text' placeholder='Last Name' name='lastname'/>
            <Input type='password' placeholder='Password' name='password'/>
            <Btn text='Sign up' variant='2'/>
        </form>

        {/* Log in link */}
        <p className='mt-16'>Already have an account? <a href="/login" className='text-white font-semibold'>Log in here</a></p>
    </div>
  )
}

export default SignUp