interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  )
}