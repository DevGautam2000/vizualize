"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonGroup } from "@/components/ui/button-group";
import { DemoContainer } from "@/components/ui/demo-container";

export default function ResponsivePage() {
  const [layout, setLayout] = useState("mobile");
  const [columns, setColumns] = useState(1);
  const [spacing, setSpacing] = useState(4);

  const layouts = [
    { value: "mobile", label: "Mobile" },
    { value: "tablet", label: "Tablet" },
    { value: "desktop", label: "Desktop" },
  ];

  const columnOptions = [
    { value: 1, label: "1 Column" },
    { value: 2, label: "2 Columns" },
    { value: 3, label: "3 Columns" },
    { value: 4, label: "4 Columns" },
  ];

  const spacingOptions = [
    { value: 2, label: "Small" },
    { value: 4, label: "Medium" },
    { value: 6, label: "Large" },
    { value: 8, label: "Extra Large" },
  ];

  const getContainerClass = () => {
    const baseClass =
      "grid w-full transition-all duration-500 ease-in-out relative p-4 sm:p-6 md:p-8";
    const gapClass = `gap-${spacing}`;

    switch (layout) {
      case "mobile":
        return `${baseClass} ${gapClass} grid-cols-1 max-w-sm mx-auto`;
      case "tablet":
        return `${baseClass} ${gapClass} grid-cols-${Math.min(columns, 2)} max-w-2xl mx-auto`;
      case "desktop":
        return `${baseClass} ${gapClass} grid-cols-${columns} max-w-full`;
      default:
        return baseClass;
    }
  };

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8">
      <PageHeader
        title="Responsive Design"
        description="Learn responsive design principles with interactive examples and breakpoints."
      />

      <Card>
        <CardHeader>
          <CardTitle>Responsive Layout</CardTitle>
          <CardDescription>
            Experiment with different screen sizes and layout configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">

          <DemoContainer className="overflow-scroll py-2" height={400}>
            <div className={getContainerClass()}>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="
                  h-60 w-full 
                  flex aspect-video items-center justify-center 
                  rounded-xl bg-primary/90 
                  text-primary-foreground transition-all 
                  duration-500 ease-in-out 
                  hover:scale-105 hover:shadow-xl hover:bg-primary 
                  relative overflow-hidden ring-1 ring-primary/20"
                >
                  <span className="text-lg font-medium z-10">
                    Content {i + 1}
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </DemoContainer>
          <div className="grid gap-6">
            <ButtonGroup
              label="View Mode"
              options={layouts}
              value={layout}
              onChange={(value: string | number) => setLayout(String(value))}
            />

            <ButtonGroup
              label="Columns"
              options={columnOptions}
              value={columns}
              onChange={(value: string | number) => setColumns(Number(value))}
            />

            <ButtonGroup
              label="Spacing"
              options={spacingOptions}
              value={spacing}
              onChange={(value: string | number) => setSpacing(Number(value))}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
