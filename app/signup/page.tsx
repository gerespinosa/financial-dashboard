'use client'
import React, { useState } from 'react'
import SignUp from './components/SignUp'
import Notification from '../components/ui/Notification'

const Page = () => {
  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <SignUp />
      <Notification text="Access granted" isVisible={notificationIsVisible} />
    </div>
  )
}

export default Page