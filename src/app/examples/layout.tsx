"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ExamplesLayout({
  children,
}: {
  children: ReactNode;
}) {

  const pathname = usePathname();

  return (
    <div className="flex h-screen w-screen px-12">
      <aside className="w-[15%] border-r p-4 bg-background">
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