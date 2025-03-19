"use client"

import { useState } from "react"
import { CodeViewer } from "@/components/ui/code-viewer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { ButtonGroup } from "@/components/ui/button-group"
import { DemoContainer } from "@/components/ui/demo-container"

export default function GridPage() {
  const [columns, setColumns] = useState<number | 'auto'>(3)
  const [rows, setRows] = useState("auto")
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

  const sourceCode = `display: grid;
grid-template-columns: ${getGridTemplateColumns()};
grid-template-rows: ${getGridTemplateRows()};
gap: ${getGridGap()};`;

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <CodeViewer code={sourceCode} language="css" />
      <PageHeader
        title="Grid Layout"
        description="Master CSS Grid with interactive examples and visual guides."
      />
    
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Grid Template Columns</CardTitle>
            <CardDescription>Define the columns of your grid layout</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DemoContainer>
              <div className={`grid ${getGridTemplateColumns()} gap-2 h-full transition-[grid-template-columns] duration-300 ease-in-out`}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </DemoContainer>
            <ButtonGroup
              label="Columns"
              options={[
                { value: 1, label: "1 Column" },
                { value: 2, label: "2 Columns" },
                { value: 3, label: "3 Columns" },
                { value: "auto", label: "Auto-fit" }
              ]}
              value={columns}
              onChange={(value) => setColumns(typeof value === 'string' ? value as 'auto' : Number(value))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Template Rows</CardTitle>
            <CardDescription>Control the height of grid rows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DemoContainer>
              <div className={`grid ${getGridTemplateRows()} grid-flow-col gap-2 h-full`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </DemoContainer>
            <ButtonGroup
              label="Rows"
              options={[
                { value: "equal", label: "Equal Height" },
                { value: "auto", label: "Auto Height" },
                { value: "mixed", label: "Mixed Heights" }
              ]}
              value={rows}
              onChange={(value) => setRows(value.toString())}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Areas</CardTitle>
            <CardDescription>Create complex layouts with named grid areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DemoContainer>
              <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
                {getGridLayout()}
              </div>
            </DemoContainer>
            <ButtonGroup
              label="Layout"
              options={[
                { value: 1, label: "Layout 1" },
                { value: 2, label: "Layout 2" },
                { value: 3, label: "Layout 3" }
              ]}
              value={layout}
              onChange={(value) => setLayout(Number(value))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grid Gap</CardTitle>
            <CardDescription>Control spacing between grid items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DemoContainer>
              <div className={`grid grid-cols-3 ${getGridGap()} h-full`}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  {i + 1}
                </div>
              ))}
              </div>
            </DemoContainer>
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