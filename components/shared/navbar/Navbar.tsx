"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import DekstopNav from "./dekstop/DekstopNav";
import MobileNav from "./mobile/MobileNav";

function Navbar() {
  const { isMobile } = useIsMobile();

  return (
    <div className='py-8'>{isMobile ? <MobileNav /> : <DekstopNav />}</div>
  );
}

export default Navbar;
