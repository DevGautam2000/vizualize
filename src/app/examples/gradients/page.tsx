"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function GradientsExample() {
  const [gradientType, setGradientType] = useState("linear");
  const [startColor, setStartColor] = useState("#3b82f6");
  const [endColor, setEndColor] = useState("#10b981");
  const [angle, setAngle] = useState("90");

  const getGradientStyle = () => {
    if (gradientType === "linear") {
      return `linear-gradient(${angle}deg, ${startColor}, ${endColor})`;
    } else if (gradientType === "radial") {
      return `radial-gradient(circle, ${startColor}, ${endColor})`;
    } else {
      return `conic-gradient(from ${angle}deg, ${startColor}, ${endColor})`;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">CSS Gradients</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Gradient Type</Label>
            <Select value={gradientType} onValueChange={setGradientType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="linear">Linear</SelectItem>
                <SelectItem value="radial">Radial</SelectItem>
                <SelectItem value="conic">Conic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Start Color</Label>
            <div className="flex gap-4 items-center">
              <Input
                type="color"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="w-16 h-10"
              />
              <Input
                type="text"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>End Color</Label>
            <div className="flex gap-4 items-center">
              <Input
                type="color"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="w-16 h-10"
              />
              <Input
                type="text"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
              />
            </div>
          </div>

          {gradientType !== "radial" && (
            <div className="space-y-2">
              <Label>Angle (degrees)</Label>
              <Input
                type="number"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                min="0"
                max="360"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-8">
          <div
            className="w-64 h-64 rounded-lg"
            style={{
              background: getGradientStyle()
            }}
          />
        </div>
      </div>
    </div>
  );
}