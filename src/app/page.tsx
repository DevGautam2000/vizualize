"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <section className="container mx-auto px-4 py-24 space-y-12 md:space-y-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-[900px]"
          >
            Master CSS Layouts <br className="hidden sm:inline" /> Visually &
            Interactively
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[600px] text-lg text-muted-foreground md:text-xl"
          >
            Learn and experiment with CSS layouts through interactive
            visualizations. Perfect for beginners and professionals alike.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Button
              size="lg"
              asChild
              className="relative group overflow-hidden bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]"
            >
              <a href="/examples/flexbox" className="relative z-10">
                Start vizualizing
              </a>
            </Button>
           
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border"></div>
          <p className="text-sm font-medium text-muted-foreground">Explore</p>
          <div className="h-px flex-1 bg-border"></div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card
              className="group relative bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-primary/10 transition-all duration-300 cursor-pointer border-2 border-primary/10 hover:border-primary/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-primary/20 before:to-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              asChild
            >
              <a href="/examples/flexbox">
                <CardHeader>
                  <CardTitle className="text-xl">Flexbox Layout</CardTitle>
                  <CardDescription className="text-sm">
                    Master flexible box layouts with interactive examples
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-24 rounded-lg border bg-muted/40 p-2 flex flex-row items-start gap-1">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card
              className="group relative bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-primary/10 transition-all duration-300 cursor-pointer border-2 border-primary/10 hover:border-primary/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-primary/20 before:to-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              asChild
            >
              <a href="/examples/grid">
                <CardHeader>
                  <CardTitle className="text-xl">Grid System</CardTitle>
                  <CardDescription className="text-sm">
                    Create complex layouts with CSS Grid
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-24 rounded-lg border bg-muted/40 p-2 grid grid-cols-2 gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card
              className="group relative bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-primary/10 transition-all duration-300 cursor-pointer border-2 border-primary/10 hover:border-primary/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-primary/20 before:to-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              asChild
            >
              <a href="/examples/positioning">
                <CardHeader>
                  <CardTitle className="text-xl">Positioning</CardTitle>
                  <CardDescription className="text-sm">
                    Learn element positioning and stacking
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-24 rounded-lg border bg-muted/40 p-2 relative">
                    <div className="absolute inset-2 rounded-lg border-2 border-dashed border-muted-foreground/50">
                      <div className="absolute top-1 left-1 h-6 w-6 rounded-lg bg-primary text-primary-foreground text-sm grid place-items-center">
                        1
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
