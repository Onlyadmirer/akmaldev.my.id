"use client";

import Image from "next/image";
import ThemeToggle from "../../ui/ThemeToggle";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  LuBookUser,
  LuGalleryVerticalEnd,
  LuHouse,
  LuLayoutDashboard,
  LuUser,
} from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

function DekstopNav() {
  const pathName = usePathname();
  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <LuHouse size={20} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <LuUser size={20} />,
    },
    {
      label: "Achievements",
      href: "/achievements",
      icon: <PiCertificate size={20} />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <LuGalleryVerticalEnd size={20} />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <LuBookUser size={20} />,
    },
  ];

  return (
    <div className='flex h-full flex-col'>
      <div className='h-2/6 flex flex-col items-center gap-3 border-b border-secondary/40'>
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
      <div className='h-3/6 py-4 flex flex-col gap-1 border-b border-secondary/40'>
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
      <div className='h-1/6 py-4'>
        <h1 className='text-center text-lg'>
          © {new Date().getFullYear()} Akmal. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default DekstopNav;
