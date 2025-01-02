'use client'
import Image from "next/image";
import Btn2 from "./components/ui/Btn2";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Aquí va algo de información y cosillas chula de la app</p>
      <Btn2 text={"Login"} variant={"1"} action={() => router.push('/login')}  />
    </div>
  );
}
