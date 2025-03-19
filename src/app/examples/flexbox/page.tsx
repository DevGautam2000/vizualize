"use client"

import { useState } from "react"
import { CodeViewer } from "@/components/ui/code-viewer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { ButtonGroup } from "@/components/ui/button-group"
import { DemoContainer } from "@/components/ui/demo-container"

export default function FlexboxPage() {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row')
  const [justifyContent, setJustifyContent] = useState<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>('flex-start')
  const [alignItems, setAlignItems] = useState<'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'>('flex-start')
  const [flexWrap, setFlexWrap] = useState<'nowrap' | 'wrap' | 'wrap-reverse'>('nowrap')

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

  const sourceCode = `display: flex;
flex-direction: ${flexDirection};
justify-content: ${justifyContent};
align-items: ${alignItems};
flex-wrap: ${flexWrap};`;

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <CodeViewer code={sourceCode} language="css" />
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
              onChange={(value) => setFlexDirection(value as 'row' | 'column' | 'row-reverse' | 'column-reverse')}
            />

            <ButtonGroup
              label="Justify Content"
              options={justifyOptions}
              value={justifyContent}
              onChange={(value) => setJustifyContent(value as 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly')}
            />

            <ButtonGroup
              label="Align Items"
              options={alignOptions}
              value={alignItems}
              onChange={(value) => setAlignItems(value as 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline')}
            />

            <ButtonGroup
              label="Flex Wrap"
              options={wrapOptions}
              value={flexWrap}
              onChange={(value) => setFlexWrap(value as 'nowrap' | 'wrap' | 'wrap-reverse')}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
