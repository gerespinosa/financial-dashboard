'use client'
import { useState } from 'react'
import { useSession } from "next-auth/react";
import Login from "./components/Login";
import Notification from "./components/ui/Notification";
export default function Home() {

  const { data: session } = useSession();
  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] relative">
      <Login setNotificationIsVisible={setNotificationIsVisible}/>
      <Notification text='Access granted' isVisible={notificationIsVisible} />
    </div>
  );
}
