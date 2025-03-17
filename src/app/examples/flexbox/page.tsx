"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { ButtonGroup } from "@/components/ui/button-group"
import { DemoContainer } from "@/components/ui/demo-container"

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
      <PageHeader
        title="Flexbox Layout"
        description="Learn and experiment with Flexbox properties through interactive examples."
      />

      <Card>
        <CardHeader>
          <CardTitle>Flexbox Properties</CardTitle>
          <CardDescription>
            Experiment with different flexbox properties to understand their effects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <DemoContainer className="grid place-items-center p-8" height={400}>
            <div
              className="flex h-full w-full gap-4 rounded-lg bg-muted/40 p-4 transition-all duration-500 ease-in-out"
              style={{
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap
              }}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </DemoContainer>

          <div className="grid gap-6">
            <ButtonGroup
              label="Flex Direction"
              options={flexDirections}
              value={flexDirection}
              onChange={setFlexDirection}
            />

            <ButtonGroup
              label="Justify Content"
              options={justifyOptions}
              value={justifyContent}
              onChange={setJustifyContent}
            />

            <ButtonGroup
              label="Align Items"
              options={alignOptions}
              value={alignItems}
              onChange={setAlignItems}
            />

            <ButtonGroup
              label="Flex Wrap"
              options={wrapOptions}
              value={flexWrap}
              onChange={setFlexWrap}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
