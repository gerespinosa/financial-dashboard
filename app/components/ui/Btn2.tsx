import { BtnProps } from "@/types";
import Image from "next/image";

const Btn = ({ text, variant, path, action }: BtnProps) => {
  return (
    <button
      className={`${variant === '1' ? 'w-[100px]' : 'w-full'} shadow-md shadow-black text-white bg-black hover:bg-secondary transition-colors duration-300 ease-in-out px-2 py-1 font-semibold rounded-md flex justify-center items-center gap-2`}
      onClick={action}>
      {variant === '3' && path && (
        <Image
          src={path}
          width={16}
          height={16}
          alt={`${text} icon`}
          className="text-white"
        />
      )}
      {text}
    </button>
  );
};

export default Btn;
