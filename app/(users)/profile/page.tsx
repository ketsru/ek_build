"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@/types/user";

export default function ProfileSheet({ user, trigger }: { user: User; trigger: React.ReactNode }) {
  return (
    <>
   {/* <Sheet>
      {/* L’élément cliquable devient le trigger 
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mon profil</SheetTitle>
          <SheetDescription>
            Vous pouvez mettre à jour vos informations personnelles.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-4">
          <div className="grid gap-3">
            <Label htmlFor="first">Prénom</Label>
            <Input id="first" defaultValue={user.firstName} />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="last">Nom</Label>
            <Input id="last" defaultValue={user.lastName} />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" defaultValue={user.email} disabled />
          </div>
        </div>

        <SheetFooter>
          <Button type="submit">Enregistrer</Button>
          <SheetClose asChild>
            <Button variant="outline">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>*/}
    <div>Page</div>
    </>
  );
}
