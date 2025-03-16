"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PositioningPage() {
  const [relativePosition, setRelativePosition] = useState(false)
  const [absolutePosition, setAbsolutePosition] = useState("bottom-left")
  const [showFixed, setShowFixed] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight">CSS Positioning</h1>
        <p className="text-lg text-muted-foreground">Learn how different position values affect elements in the layout.</p>
      </div>
    
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Static vs Relative</CardTitle>
            <CardDescription>Compare default static positioning with relative positioning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] rounded-lg border bg-muted/40 p-4 relative">
              <div className="absolute inset-4 grid place-items-center rounded-lg border-2 border-dashed border-muted-foreground/50">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">Static</div>
                  <div className={`relative flex h-16 w-16 ${relativePosition ? "-translate-y-4 translate-x-4" : ""} items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-all duration-500 ease-in-out`}>Relative</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={!relativePosition ? "default" : "outline"} 
                size="sm"
                onClick={() => setRelativePosition(false)}
              >
                Reset
              </Button>
              <Button 
                variant={relativePosition ? "default" : "outline"} 
                size="sm"
                onClick={() => setRelativePosition(true)}
              >
                Move
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Absolute Positioning</CardTitle>
            <CardDescription>Position elements relative to their closest positioned ancestor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] rounded-lg border bg-muted/40 p-4 relative">
              <div className="absolute inset-4 grid place-items-center rounded-lg border-2 border-dashed border-muted-foreground/50">
                <div className="relative h-24 w-24 rounded-lg bg-secondary">
                  <div 
                    className={`absolute h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center transform transition-all duration-500 ease-in-out
                      ${absolutePosition === "top-left" ? "top-0 left-0 -translate-x-4 -translate-y-4" : ""}
                      ${absolutePosition === "top-right" ? "top-0 right-0 translate-x-4 -translate-y-4" : ""}
                      ${absolutePosition === "bottom-left" ? "bottom-0 left-0 -translate-x-4 translate-y-4" : ""}
                      ${absolutePosition === "bottom-right" ? "bottom-0 right-0 translate-x-4 translate-y-4" : ""}
                    `}
                  >
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={absolutePosition === "top-left" ? "default" : "outline"} 
                size="sm"
                onClick={() => setAbsolutePosition("top-left")}
              >
                Top Left
              </Button>
              <Button 
                variant={absolutePosition === "top-right" ? "default" : "outline"} 
                size="sm"
                onClick={() => setAbsolutePosition("top-right")}
              >
                Top Right
              </Button>
              <Button 
                variant={absolutePosition === "bottom-left" ? "default" : "outline"} 
                size="sm"
                onClick={() => setAbsolutePosition("bottom-left")}
              >
                Bottom Left
              </Button>
              <Button 
                variant={absolutePosition === "bottom-right" ? "default" : "outline"} 
                size="sm"
                onClick={() => setAbsolutePosition("bottom-right")}
              >
                Bottom Right
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fixed Position</CardTitle>
            <CardDescription>Position elements relative to the viewport</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] rounded-lg border bg-muted/40 p-4 relative overflow-hidden">
              <div className="absolute inset-4 rounded-lg border-2 border-dashed border-muted-foreground/50 overflow-auto">
                <div className="h-[400px] relative">
                  {showFixed && (
                    <div className="fixed bottom-4 right-4 h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center">↑</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={showFixed ? "default" : "outline"} 
                size="sm"
                onClick={() => setShowFixed(true)}
              >
                Show
              </Button>
              <Button 
                variant={!showFixed ? "default" : "outline"} 
                size="sm"
                onClick={() => setShowFixed(false)}
              >
                Hide
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sticky Position</CardTitle>
            <CardDescription>Elements that stick to the viewport while scrolling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] rounded-lg border bg-muted/40 p-4 relative overflow-hidden">
              <div 
                className="absolute inset-4 rounded-lg border-2 border-dashed border-muted-foreground/50 overflow-auto"
                onScroll={(e) => setIsScrolled(e.currentTarget.scrollTop > 0)}
              >
                <div className="space-y-4 p-4">
                  <div className="sticky top-0 h-12 w-full rounded-lg bg-primary text-primary-foreground grid place-items-center">Header</div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-24 rounded-lg bg-secondary" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={isScrolled ? "default" : "outline"} 
                size="sm"
                onClick={() => {
                  const container = document.querySelector(".overflow-auto")
                  if (container) container.scrollTop = 100
                }}
              >
                Scroll
              </Button>
              <Button 
                variant={!isScrolled ? "default" : "outline"} 
                size="sm"
                onClick={() => {
                  const container = document.querySelector(".overflow-auto")
                  if (container) container.scrollTop = 0
                }}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}