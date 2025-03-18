"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function AppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-8 sm:px-10">
          <Link href="/" className="text-xl relative right-4 font-bold hover:text-primary">Vizualizer</Link>
          <ThemeToggle />
        </div>
      </header>
  )
}