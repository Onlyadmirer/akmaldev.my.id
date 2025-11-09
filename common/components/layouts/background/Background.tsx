"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className='absolute inset-0 -z-10 bg-neutral-100 dark:bg-neutral-900' />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className='w-full'>
      {isDark ? (
        <>
          {/* Dark mode background */}
          <div
            className='absolute inset-0 -z-10 transition-bg'
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%)",
            }}
          />
          <div
            className='absolute inset-0 -z-10 pointer-events-none'
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
              opacity: 0.95,
            }}
          />
        </>
      ) : (
        <>
          {/* Light mode background */}
          <div className=' w-full  '>
            {/* Cool Blue Glow Top */}
            <div
              className='absolute inset-0 -z-10'
              style={{
                background: "#ffffff",
                backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Your Content/Components */}
          </div>
        </>
      )}
    </div>
  );
}

export default Background;
