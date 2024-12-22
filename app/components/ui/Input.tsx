import { InputProps } from '@/types'
import React from 'react'

const Input = ({type, placeholder, name}:InputProps) => {
  return (
    <input type={type} placeholder={placeholder} name={name}
    className='w-[400px] h-[40px] outline-none p-2 rounded-md text-black'>
    </input>
  )
}

export default Input