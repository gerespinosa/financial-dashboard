'use client'
import { useSession } from "next-auth/react";
import Login from "./components/Login";
export default function Home() {

  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Login/>
    </div>
  );
}
