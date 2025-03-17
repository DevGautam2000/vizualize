interface ButtonGroupOption {
  value: string | number
  label: string
}

interface ButtonGroupProps {
  label: string
  options: ButtonGroupOption[]
  value: string | number
  onChange: (value: string | number) => void
}

import { Button } from "@/components/ui/button"

export function ButtonGroup({ label, options, value, onChange }: ButtonGroupProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.value}
            variant={value === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}