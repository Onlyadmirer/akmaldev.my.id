"use client";

import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";

export default function TopLoader() {
  const { resolvedTheme } = useTheme(); // "light" | "dark"

  const loaderColor = resolvedTheme === "dark" ? "#ff00009d" : "#009fc3"; // warna berbeda

  const loaderShadow =
    resolvedTheme === "dark"
      ? "0 0 10px #ff00009d, 0 0 5px #ff3a3ac6"
      : "0 0 10px #009fc3, 0 0 5px #3ddbff";

  return (
    <NextTopLoader
      color={loaderColor}
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing='ease'
      speed={200}
      shadow={loaderShadow}
    />
  );
}
