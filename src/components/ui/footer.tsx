"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-6 border-t bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        {currentYear} © Gautam Chandra Saha
      </div>
    </footer>
  );
}