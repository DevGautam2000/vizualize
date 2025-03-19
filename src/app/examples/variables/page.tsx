"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CodeViewer } from "@/components/ui/code-viewer";

export default function VariablesExample() {
  const [primaryColor, setPrimaryColor] = useState("#3b82f6");
  const [accentColor, setAccentColor] = useState("#10b981");
  const [spacing, setSpacing] = useState("1rem");
  const [borderRadius, setBorderRadius] = useState("0.5rem");

  const sourceCode = `--primary: ${primaryColor};
--accent: ${accentColor};
--spacing: ${spacing};
--radius: ${borderRadius};`;

  return (
    <div className="container mx-auto py-8">
      <CodeViewer code={sourceCode} language="css" />
      <h1 className="text-3xl font-bold mb-8">CSS Variables (Custom Properties)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <div className="flex gap-4 items-center">
              <Input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-16 h-10"
              />
              <Input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Accent Color</Label>
            <div className="flex gap-4 items-center">
              <Input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-16 h-10"
              />
              <Input
                type="text"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Spacing</Label>
            <Input
              type="text"
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              placeholder="e.g., 2rem"
            />
          </div>

          <div className="space-y-2">
            <Label>Border Radius</Label>
            <Input
              type="text"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              placeholder="e.g., 0.5rem"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div
            style={{
              "--primary": primaryColor,
              "--accent": accentColor,
              "--spacing": spacing,
              "--radius": borderRadius,
            } as React.CSSProperties}
            className="p-8 bg-secondary/20 rounded-lg"
          >
            <div
              style={{
                backgroundColor: "var(--primary)",
                padding: "var(--spacing)",
                borderRadius: "var(--radius)",
                marginBottom: "var(--spacing)",
              }}
              className="text-white font-medium"
            >
              Primary Color Box
            </div>
            <div
              style={{
                backgroundColor: "var(--accent)",
                padding: "var(--spacing)",
                borderRadius: "var(--radius)",
              }}
              className="text-white font-medium"
            >
              Accent Color Box
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}