"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function AppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container relative mx-auto flex h-14 items-center justify-between px-8 sm:px-10">
          <Link href="/" className="text-xl font-bold opacity-0 relative right-5 md:opacity-100 hover:text-primary">Vizualizer</Link>
          <ThemeToggle />
        </div>
      </header>
  )
}