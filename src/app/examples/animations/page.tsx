"use client"

import { useState } from "react"
import { CodeViewer } from "@/components/ui/code-viewer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { ButtonGroup } from "@/components/ui/button-group"
import { DemoContainer } from "@/components/ui/demo-container"
import { Play, RotateCcw } from "lucide-react"

export default function AnimationsPage() {
  const [animationType, setAnimationType] = useState("fade")
  const [duration, setDuration] = useState("500")
  const [easing, setEasing] = useState("ease-in-out")
  const [isPlaying, setIsPlaying] = useState(false)

  const animationTypes = [
    { value: "fade", label: "Fade" },
    { value: "slide", label: "Slide" },
    { value: "rotate", label: "Rotate" },
    { value: "scale", label: "Scale" },
    { value: "bounce", label: "Bounce" },
  ]

  const durations = [
    { value: "300", label: "Fast" },
    { value: "500", label: "Normal" },
    { value: "1000", label: "Slow" },
  ]

  const easings = [
    { value: "ease-in-out", label: "Ease In Out" },
    { value: "ease-in", label: "Ease In" },
    { value: "ease-out", label: "Ease Out" },
    { value: "linear", label: "Linear" },
  ]

  const getAnimationClass = () => {
    const baseClass = "transform transition-all"
    const durationClass = `duration-${duration}`
    const easingClass = easing
    
    if (!isPlaying) return `${baseClass} ${durationClass} ${easingClass}`

    switch (animationType) {
      case "fade":
        return `${baseClass} ${durationClass} ${easingClass} opacity-10`
      case "slide":
        return `${baseClass} ${durationClass} ${easingClass} translate-x-full`
      case "rotate":
        return `${baseClass} ${durationClass} ${easingClass} rotate-180`
      case "scale":
        return `${baseClass} ${durationClass} ${easingClass} scale-25`
      case "bounce":
        return `${baseClass} ${durationClass} ${easingClass} translate-y-full animate-bounce`
      default:
        return baseClass
    }
  }

  const sourceCode = `animation-type: ${animationType};
duration: ${duration}ms;
timing-function: ${easing};
transform: ${isPlaying ? getAnimationClass().split(' ').filter(c => c.startsWith('translate') || c.startsWith('rotate') || c.startsWith('scale')).join(' ') : 'none'};`;

  return (
    <div className="container mx-auto max-w-7xl py-8 space-y-8 ">
      <CodeViewer code={sourceCode} language="css" />
      <PageHeader
        title="CSS Animations"
        description="Explore CSS animations, transitions, and transforms with interactive examples."
      />

      <Card>
        <CardHeader>
          <CardTitle>Animation Properties</CardTitle>
          <CardDescription>
            Experiment with different animation properties to see their effects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <DemoContainer className="flex row items-center justify-center " height={400}>
          <div
              className={`group relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-primary text-primary-foreground ${getAnimationClass()}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title="Click to animate"
            >
              <div className="relative z-10">
                {isPlaying ? <RotateCcw className="h-6 w-6 " /> : <Play className="h-6 w-6" />}
              </div>
              <div className="absolute inset-0 rounded-lg bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </DemoContainer>

          <div className="grid gap-6">
            <ButtonGroup
              label="Animation Type"
              options={animationTypes}
              value={animationType}
              onChange={(value) => setAnimationType(value as string)}
            />

            <ButtonGroup
              label="Duration"
              options={durations}
              value={duration}
              onChange={(value) => setDuration(value as string)}
            />

            <ButtonGroup
              label="Easing"
              options={easings}
              value={easing}
              onChange={(value) => setEasing(value as string)}
            />


          </div>
        </CardContent>
      </Card>
    </div>
  )
}