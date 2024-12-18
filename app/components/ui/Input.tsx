import { InputProps } from '@/types'
import React from 'react'

const Input = ({type, placeholder}:InputProps) => {
  return (
    <input type={type} placeholder={placeholder}
    className='w-[400px] h-[40px] outline-none p-2 rounded-md'>
    </input>
  )
}

export default Input