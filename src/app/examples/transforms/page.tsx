"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { CodeViewer } from "@/components/ui/code-viewer";

export default function TransformsExample() {
  const [rotate, setRotate] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  return (
    <div className="container mx-auto py-8">
      <CodeViewer code={`transform: 
  rotate(${rotate}deg)
  scale(${scaleX}, ${scaleY})
  skew(${skewX}deg, ${skewY}deg);`} language="css" />
      <h1 className="text-3xl font-bold mb-8">CSS Transforms</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Rotate (degrees)</Label>
            <Slider
              value={[rotate]}
              onValueChange={([value]) => setRotate(value)}
              min={0}
              max={360}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <Label>Scale X</Label>
            <Slider
              value={[scaleX]}
              onValueChange={([value]) => setScaleX(value)}
              min={0.5}
              max={2}
              step={0.1}
            />
          </div>

          <div className="space-y-4">
            <Label>Scale Y</Label>
            <Slider
              value={[scaleY]}
              onValueChange={([value]) => setScaleY(value)}
              min={0.5}
              max={2}
              step={0.1}
            />
          </div>

          <div className="space-y-4">
            <Label>Skew X (degrees)</Label>
            <Slider
              value={[skewX]}
              onValueChange={([value]) => setSkewX(value)}
              min={-45}
              max={45}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <Label>Skew Y (degrees)</Label>
            <Slider
              value={[skewY]}
              onValueChange={([value]) => setSkewY(value)}
              min={-45}
              max={45}
              step={1}
            />
          </div>
        </div>

        <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-8">
          <div
            className="w-32 h-32 bg-primary/80 rounded-lg transition-transform duration-200"
            style={{
              transform: `
                rotate(${rotate}deg)
                scale(${scaleX}, ${scaleY})
                skew(${skewX}deg, ${skewY}deg)
              `
            }}
          />
        </div>
      </div>
    </div>
  );
}