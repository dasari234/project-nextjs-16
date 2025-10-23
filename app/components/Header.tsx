"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 h-14 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">
          <Link href="/">Sentinel Demo</Link>
        </h1>
      </div>
    </header>
  );
}
