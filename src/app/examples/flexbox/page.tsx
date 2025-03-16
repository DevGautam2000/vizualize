"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FlexboxPage() {
  const [flexDirection, setFlexDirection] = useState("row")
  const [justifyContent, setJustifyContent] = useState("flex-start")
  const [alignItems, setAlignItems] = useState("flex-start")
  const [flexWrap, setFlexWrap] = useState("nowrap")

  const flexDirections = [
    { value: "row", label: "Row" },
    { value: "column", label: "Column" },
    { value: "row-reverse", label: "Row Reverse" },
    { value: "column-reverse", label: "Column Reverse" },
  ]

  const justifyOptions = [
    { value: "flex-start", label: "Start" },
    { value: "center", label: "Center" },
    { value: "flex-end", label: "End" },
    { value: "space-between", label: "Space Between" },
    { value: "space-around", label: "Space Around" },
    { value: "space-evenly", label: "Space Evenly" },
  ]

  const alignOptions = [
    { value: "flex-start", label: "Start" },
    { value: "center", label: "Center" },
    { value: "flex-end", label: "End" },
    { value: "stretch", label: "Stretch" },
    { value: "baseline", label: "Baseline" },
  ]

  const wrapOptions = [
    { value: "nowrap", label: "No Wrap" },
    { value: "wrap", label: "Wrap" },
    { value: "wrap-reverse", label: "Wrap Reverse" },
  ]

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Flexbox Layout</h1>
        <p className="text-lg text-muted-foreground">
          Learn and experiment with Flexbox properties through interactive examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Flexbox Properties</CardTitle>
          <CardDescription>
            Experiment with different flexbox properties to understand their effects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div
            className="h-[300px] rounded-lg border bg-muted/40 p-4 transition-all duration-300 ease-in-out"
            style={{
              display: "flex",
              flexDirection,
              justifyContent,
              alignItems,
              flexWrap,
              gap: "0.5rem",
            }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Flex Direction</h3>
              <div className="flex flex-wrap gap-2">
                {flexDirections.map(({ value, label }) => (
                  <Button
                    key={value}
                    variant={flexDirection === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFlexDirection(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Justify Content</h3>
              <div className="flex flex-wrap gap-2">
                {justifyOptions.map(({ value, label }) => (
                  <Button
                    key={value}
                    variant={justifyContent === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setJustifyContent(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Align Items</h3>
              <div className="flex flex-wrap gap-2">
                {alignOptions.map(({ value, label }) => (
                  <Button
                    key={value}
                    variant={alignItems === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAlignItems(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Flex Wrap</h3>
              <div className="flex flex-wrap gap-2">
                {wrapOptions.map(({ value, label }) => (
                  <Button
                    key={value}
                    variant={flexWrap === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFlexWrap(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}