"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExamplesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-screen px-4 md:px-12">
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 md:hidden z-50 top-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <aside className={`fixed inset-y-0  left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} top-14 md:top-0 md:translate-x-0 transition-transform duration-200 ease-in-out md:relative md:w-[15%] border-r p-4 bg-background z-40 w-64`}>
        <nav className="space-y-1">
          {[
            { href: "/", label: "Home" },
            { href: "/examples/flexbox", label: "Flexbox" },
            { href: "/examples/grid", label: "Grid" },
            { href: "/examples/positioning", label: "Positioning" },
            { href: "/examples/animations", label: "Animations" },
            { href: "/examples/responsive", label: "Responsive" },
          ].map(({ href, label }) => {
            const isActive = pathname === href || 
              (href !== "/" && pathname?.startsWith(href));

            return (
              <a
                key={href}
                href={href}
                className={`block px-3 py-2 text-md rounded-md transition-colors ${isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-accent"}`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}