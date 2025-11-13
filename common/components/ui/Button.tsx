import { MdOutlineArrowOutward } from "react-icons/md";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='rounded-md py-2 cursor-pointer hover:bg-neutral-400 transition-all duration-300 ease-in-out flex flex-row gap-2 px-4 bg-neutral-300 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-neutral-800 text-neutral-800 text-sm font-semibold w-50 lg:w-auto'>
      {children}
      <MdOutlineArrowOutward size={18} />
    </button>
  );
}

export default Button;
