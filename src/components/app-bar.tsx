"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"

export function AppBar() {
  const location = usePathname()

  console.log(location);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container relative mx-auto flex h-14 items-center justify-between px-8 sm:px-10">
          <Link href="/" className={`text-xl font-bold relative md:right-5 hover:text-primary`}>{location.includes("example")?"":"Vizualizer"}</Link>
          <ThemeToggle />
        </div>
      </header>
  )
}