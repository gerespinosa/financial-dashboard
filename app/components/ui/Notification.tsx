import { NotificationProps } from '@/types'
import React from 'react'

const Notification = ({ text, isVisible }: NotificationProps) => {
  return (
    <div
      className={`bg-secondary p-4 rounded-tl-xl rounded-bl-xl absolute right-0 bottom-10 
        ${isVisible ? 'block' : 'hidden'}`}>
      {text}
    </div>
  )
}

export default Notification
