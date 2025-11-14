import { MdOutlineArrowOutward } from "react-icons/md";

interface buttonProps {
  children: string;
}

function Button({ children }: buttonProps) {
  return (
    <button className='flex flex-row justify-center w-40 gap-2 py-2 text-sm font-semibold transition-all duration-300 ease-in-out rounded-md cursor-pointer lg:px-4 hover:bg-neutral-400 bg-neutral-300 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-neutral-800 text-neutral-800 lg:w-auto'>
      {children}
      <MdOutlineArrowOutward size={18} />
    </button>
  );
}

export default Button;
