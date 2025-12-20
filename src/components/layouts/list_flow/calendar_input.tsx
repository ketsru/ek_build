"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CalendarInputProps {
  label: string
  value?: Date
  onChange: (date?: Date) => void
}

function formatDate(date?: Date) {
  if (!date) return ""
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function CalendarInput({
  label,
  value,
  onChange,
}: CalendarInputProps) {
  const [open, setOpen] = React.useState(false)
  const [month, setMonth] = React.useState<Date | undefined>(value)

  return (
    <div className="flex flex-col gap-2">
      <Label className="px-1">{label}</Label>

      <div className="relative">
        <Input
          value={formatDate(value)}
          placeholder="Sélectionner une date"
          readOnly
          className="bg-background pr-10 cursor-pointer"
          onClick={() => setOpen(true)}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-auto p-0"
            align="end"
            sideOffset={8}
          >
            <Calendar
              mode="single"
              selected={value}
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                onChange(date)
                setOpen(false)
              }}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
