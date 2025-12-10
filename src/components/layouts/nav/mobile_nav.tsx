
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
import { ShoppingBasket, TextAlignJustify } from "lucide-react"
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
                        <SheetDescription>
                            Naviguez facilement avec nous.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                            <div className="grid gap-3">
                                <Link href="">Accueil</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="">A propos</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="/cart" className="hover:text-primary transition">
                                    <span>Mon Panier</span>
                                </Link>
                            </div>
                        </div>
                        <SheetFooter>
                            <Button type="submit" variant="outline">S'inscrire maintenant</Button>

                            <Button type="submit">Se connecter maintenant !</Button>
                        </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}