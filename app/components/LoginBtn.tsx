import { signIn } from "next-auth/react";
import Btn from "./ui/Btn";

export default function LoginBtn() {
    
  return (
    <div className="w-full">
      <Btn text='Log in with Google' action={() => signIn()} variant="3" path="google.svg"/>
    </div>
  );
}
