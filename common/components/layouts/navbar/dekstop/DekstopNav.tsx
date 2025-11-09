import Image from "next/image";
import ThemeToggle from "../../../shared/ui/ThemeToggle";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useNavbar } from "@/hooks/useNavbar";

function DekstopNav() {
  const { pathName, menuItems } = useNavbar();

  return (
    <div className='flex h-full flex-col px-2'>
      <div className='flex-3 flex flex-col pb-2 items-center gap-3 border-b border-secondary/40'>
        <div className='overflow-hidden w-22 h-22 rounded-full border-2 border-secondary/50 relative'>
          <Image
            src={"/pp.jpeg"}
            alt='foto profile'
            fill
            className='w-full h-full object-cover'
          ></Image>
        </div>
        <div className='text-center'>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-2xl font-semibold '>Akmal</h1>
            <RiVerifiedBadgeFill className='text-cyan-400' size={20} />
          </div>
          <p className='text-sm text-secondary/70'>@akmal</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className='flex-4 py-4 flex flex-col gap-1 border-b border-secondary/40'>
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`flex flex-row justify-between py-2 rounded-lg px-4 items-center hover:scale-105 transition-all duration-200 ease-in-out hover:bg-secondary/10 ${
              pathName === item.href
                ? "bg-secondary/10 scale-105"
                : "bg-transparent"
            }`}
          >
            <div className='flex flex-row items-center gap-2'>
              {item.icon}
              <span className='text-base'>{item.label}</span>
            </div>
            {pathName === item.href ? <BsArrowRight /> : ""}
          </Link>
        ))}
      </div>
      <div className='flex-1 py-4'>
        <h1 className='text-center text-lg'>
          © {new Date().getFullYear()} Akmal. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default DekstopNav;
