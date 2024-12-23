import React from 'react'
import Notification from '../components/ui/Notification'
import Login from './components/Login'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Login />
      {/* <Notification text={''} isVisible={false} /> */}
    </div>
  )
}

export default page