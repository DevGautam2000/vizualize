"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GridPage() {
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState("equal")
  const [layout, setLayout] = useState(1)
  const [gap, setGap] = useState(2)

  const getGridTemplateColumns = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-2"
      case 3:
        return "grid-cols-3"
      case "auto":
        return "grid-cols-[repeat(auto-fit,minmax(100px,1fr))]"
      default:
        return "grid-cols-3"
    }
  }

  const getGridTemplateRows = () => {
    switch (rows) {
      case "equal":
        return "grid-rows-3"
      case "auto":
        return "grid-rows-none"
      case "mixed":
        return "grid-rows-[100px,auto,50px]"
      default:
        return "grid-rows-3"
    }
  }

  const getGridGap = () => {
    switch (gap) {
      case 1:
        return "gap-1"
      case 2:
        return "gap-2"
      case 4:
        return "gap-4"
      default:
        return "gap-2"
    }
  }

  const getGridLayout = () => {
    switch (layout) {
      case 1:
        return (
          <>
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Main</div>
            <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Side</div>
            <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Extra</div>
            <div className="col-span-3 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">Footer</div>
          </>
        )
      case 2:
        return (
          <>
            <div className="col-span-3 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Header</div>
            <div className="col-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Content</div>
            <div className="row-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Sidebar</div>
            <div className="col-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Footer</div>
          </>
        )
      case 3:
        return (
          <>
            <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Nav</div>
            <div className="col-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">Header</div>
            <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Side</div>
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Main</div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Grid Layout</h1>
        <p className="text-lg text-muted-foreground">Master CSS Grid with interactive examples and visual guides.</p>
      </div>
    
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Grid Template Columns</CardTitle>
            <CardDescription>Define the columns of your grid layout</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`h-[200px] rounded-lg border bg-muted/40 p-4 grid ${getGridTemplateColumns()} gap-2`}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={columns === 1 ? "default" : "outline"} 
                size="sm"
                onClick={() => setColumns(1)}
              >
                1 Column
              </Button>
              <Button 
                variant={columns === 2 ? "default" : "outline"} 
                size="sm"
                onClick={() => setColumns(2)}
              >
                2 Columns
              </Button>
              <Button 
                variant={columns === 3 ? "default" : "outline"} 
                size="sm"
                onClick={() => setColumns(3)}
              >
                3 Columns
              </Button>
              <Button 
                variant={columns === "auto" ? "default" : "outline"} 
                size="sm"
                onClick={() => setColumns("auto")}
              >
                Auto-fit
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Template Rows</CardTitle>
            <CardDescription>Control the height of grid rows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`h-[200px] rounded-lg border bg-muted/40 p-4 grid ${getGridTemplateRows()} grid-flow-col gap-2`}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={rows === "equal" ? "default" : "outline"} 
                size="sm"
                onClick={() => setRows("equal")}
              >
                Equal Height
              </Button>
              <Button 
                variant={rows === "auto" ? "default" : "outline"} 
                size="sm"
                onClick={() => setRows("auto")}
              >
                Auto Height
              </Button>
              <Button 
                variant={rows === "mixed" ? "default" : "outline"} 
                size="sm"
                onClick={() => setRows("mixed")}
              >
                Mixed Heights
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Areas</CardTitle>
            <CardDescription>Create complex layouts with named grid areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] rounded-lg border bg-muted/40 p-4 grid grid-cols-3 grid-rows-3 gap-2">
              {getGridLayout()}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={layout === 1 ? "default" : "outline"} 
                size="sm"
                onClick={() => setLayout(1)}
              >
                Layout 1
              </Button>
              <Button 
                variant={layout === 2 ? "default" : "outline"} 
                size="sm"
                onClick={() => setLayout(2)}
              >
                Layout 2
              </Button>
              <Button 
                variant={layout === 3 ? "default" : "outline"} 
                size="sm"
                onClick={() => setLayout(3)}
              >
                Layout 3
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Gap</CardTitle>
            <CardDescription>Control spacing between grid items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`h-[200px] rounded-lg border bg-muted/40 p-4 grid grid-cols-3 ${getGridGap()}`}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={gap === 1 ? "default" : "outline"} 
                size="sm"
                onClick={() => setGap(1)}
              >
                Small Gap
              </Button>
              <Button 
                variant={gap === 2 ? "default" : "outline"} 
                size="sm"
                onClick={() => setGap(2)}
              >
                Medium Gap
              </Button>
              <Button 
                variant={gap === 4 ? "default" : "outline"} 
                size="sm"
                onClick={() => setGap(4)}
              >
                Large Gap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}