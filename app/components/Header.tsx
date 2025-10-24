"use client";

import Link from "next/link";
import { useScrollTrigger } from "react-shared-components";
import { cn } from "../utils";

export default function Header() {
  const { trigger } = useScrollTrigger({ threshold: 30 });
  return (
    <header
      className={cn(
        "w-full bg-white sticky top-0 z-50 transition-shadow duration-300",
        trigger && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 h-14 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">
          <Link href="/">Sentinel Demo</Link>
        </h1>
      </div>
    </header>
  );
}
