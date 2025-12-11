
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TextAlignJustify } from "lucide-react"
import Link from "next/link"

export default function MobileNav () {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <TextAlignJustify />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                            <div className="grid gap-3">
                                <Link href="/about">A propos</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="/shop">Boutique</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="/cart" className="hover:text-primary transition">
                                    <span>Mon Panier</span>
                                </Link>
                            </div>
                        </div>
                        <SheetFooter>
                            <Link href="/login">
                                <Button type="submit" variant="outline">S'inscrire maintenant</Button>
                            </Link>

                            <Link href="/login">
                                <Button type="submit">Se connecter maintenant !</Button>
                            </Link>
                        </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}