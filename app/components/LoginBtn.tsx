import { useSession, signIn } from "next-auth/react";
import Btn from "./ui/Btn";
import { useRouter } from "next/navigation";


export default function LoginBtn() {

  const router = useRouter()

  const {data: session} = useSession()

  const handleLogIn = async () => {
    await signIn()
    if(session?.user){
      router.push("/dashboard")
    }else{
      router.push("/sign-in")
    }
  }
    
  return (
    <div className="w-full">
      <Btn text='Log in with Google' action={handleLogIn} variant="3" path="google.svg"/>
    </div>
  );
}
