import { BtnProps } from "@/types";
import Image from "next/image";

const Btn = ({ text, action, variant, path }: BtnProps) => {
  return (
    <button
      className={`${variant === '1' ? 'w-[100px]' : 'w-full'} shadow-md shadow-black text-white bg-black hover:bg-secondary transition-colors duration-300 ease-in-out px-2 py-1 font-semibold rounded-md flex justify-center items-center gap-2`}
      type="button"
      onClick={action}
    >
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

// variant 1 = regular button
// variant 2 = long button
// variant 3 = long button + icon

