import React from 'react'
import Input from './ui/Input'
import Btn from './ui/Btn'
import LoginBtn from './LoginBtn'
import { useRouter } from 'next/navigation'

const Login = ({setNotificationIsVisible}: any) => {

  const router = useRouter()

    const handleSubmit = () => {
      // Activate the notification at the bottom amd shows it for 3s.
      setNotificationIsVisible(true)
      setTimeout(() => {
        setNotificationIsVisible(false)
        // Redirects to the dashboard
        router.push('/dashboard')
      }, 2000)
    }

  return (
    <div className='flex flex-col justify-center items-center bg-secondary bg-opacity-45 w-fit rounded-md shadow-sm shadow-black gap-2 p-8'>
        <h4 className='text-center font-bold text-white my-4 text-title'>Log in</h4>
        {/* Log in form */}
        <Input type='email' placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
        <Btn text='Log In' action={handleSubmit} variant='2'/>
        {/* Divider */}
        <div className='flex h-[20px] items-center justify-between gap-2'>
            <hr className='w-[175px] h-[2px] bg-white border-none' />
            <span className='text-white font-semibold'>O</span>
            <hr className='w-[175px] h-[2px] bg-white border-none' />
        </div>
        {/* Google log in */}
        <LoginBtn />
        {/* Sign up link */}
        <p className='mt-16'>You don't have an account? <a href="/sign-up" className='text-white'>Sign up here</a></p>
    </div>
  )
}

export default Login