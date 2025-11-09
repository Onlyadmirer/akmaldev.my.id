'use client'

import { useWindowSize } from "usehooks-ts";

export const useIsMobile = (breakpoint: number = 768) => {
  const { width } = useWindowSize();

  const isMobile = width !== 0 && width < breakpoint;

  return { isMobile };
};
