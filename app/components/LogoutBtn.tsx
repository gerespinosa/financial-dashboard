import React from 'react'
import {useSession, signOut} from 'next-auth/react'

import Btn from './ui/Btn';

const LogoutBtn = () => {

    const { data: session } = useSession();

    return (
        <div>
          <p>Signed in as {session?.user?.email}</p>
          <Btn text='Sign Out' action={()=> signOut()}/>
        </div>
      );
}

export default LogoutBtn