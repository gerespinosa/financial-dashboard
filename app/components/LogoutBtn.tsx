import React from 'react'
import {signOut} from 'next-auth/react'

import Btn from './ui/Btn';

const LogoutBtn = () => {

    const handleLogOut = () => {
      signOut({callbackUrl: "/"})
    }

  return (
    <Btn
      text="Sign Out"
      action={handleLogOut}
      variant="1"
    />
  );  
}

export default LogoutBtn