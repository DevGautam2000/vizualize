interface DemoContainerProps {
  children: React.ReactNode
  className?: string,
  height?:number
}

export function DemoContainer({ children, className = "",height=200 }: DemoContainerProps) {
  return (
    <div className={`h-[${height}px] rounded-lg border bg-muted/40 p-4 relative overflow-hidden`}>
      <div className={`absolute inset-4 rounded-lg p-4 border-2 border-dashed border-muted-foreground/50 ${className}`}>
        {children}
      </div>
    </div>
  )
}