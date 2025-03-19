"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function FiltersExample() {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [saturate, setSaturate] = useState(100);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">CSS Filters</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Blur (px)</Label>
            <Slider
              value={[blur]}
              onValueChange={([value]) => setBlur(value)}
              min={0}
              max={20}
              step={0.5}
            />
          </div>

          <div className="space-y-4">
            <Label>Brightness (%)</Label>
            <Slider
              value={[brightness]}
              onValueChange={([value]) => setBrightness(value)}
              min={0}
              max={200}
              step={5}
            />
          </div>

          <div className="space-y-4">
            <Label>Contrast (%)</Label>
            <Slider
              value={[contrast]}
              onValueChange={([value]) => setContrast(value)}
              min={0}
              max={200}
              step={5}
            />
          </div>

          <div className="space-y-4">
            <Label>Grayscale (%)</Label>
            <Slider
              value={[grayscale]}
              onValueChange={([value]) => setGrayscale(value)}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <Label>Hue Rotate (deg)</Label>
            <Slider
              value={[hueRotate]}
              onValueChange={([value]) => setHueRotate(value)}
              min={0}
              max={360}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <Label>Saturate (%)</Label>
            <Slider
              value={[saturate]}
              onValueChange={([value]) => setSaturate(value)}
              min={0}
              max={200}
              step={5}
            />
          </div>
        </div>

        <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-8">
          <div
            className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
            style={{
              filter: `
                blur(${blur}px)
                brightness(${brightness}%)
                contrast(${contrast}%)
                grayscale(${grayscale}%)
                hue-rotate(${hueRotate}deg)
                saturate(${saturate}%)
              `
            }}
          />
        </div>
      </div>
    </div>
  );
}