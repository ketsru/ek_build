"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarInput } from "./calendar_input"

interface OrderWorkersProps {
  workerName: string
}

export function OrderWorkers({ workerName }: OrderWorkersProps) {
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="rounded-full">
            Contacter <span className="hidden md:inline">prestataire</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle className="capitalize">Contacter {workerName}</DialogTitle>
            <DialogDescription>
              Définissez la période souhaitée pour la prestation
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Sujet */}
            <div className="grid gap-2">
              <Label>Sujet</Label>
              <Input
                defaultValue={`Demande de prestation - ${workerName}`}
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CalendarInput
                label="Date de début"
                value={startDate}
                onChange={setStartDate}
              />

              <CalendarInput
                label="Date de fin"
                value={endDate}
                onChange={setEndDate}
              />
            </div>

            {/* Message */}
            <div className="grid gap-2">
              <Label>Message</Label>
              <Textarea
                placeholder={`Bonjour ${workerName}, je souhaiterais une prestation du ${startDate ? startDate.toLocaleDateString() : "..."} au ${endDate ? endDate.toLocaleDateString() : "..."}`}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Envoyer</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
