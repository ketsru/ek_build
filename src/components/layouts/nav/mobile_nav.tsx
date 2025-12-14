import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
                                <Link href="/u/about">A propos</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="/u/shop">Boutique</Link>
                            </div>
                            <div className="grid gap-3">
                                <Link href="/u/cart" className="hover:text-primary transition">
                                    <span>Ma sélection</span>
                                </Link>
                            </div>
                        </div>
                        <SheetFooter>
                            <Link href="/u/register">
                                <Button type="submit" variant="outline" className="w-full h-11">S'inscrire maintenant</Button>
                            </Link>

                            <Link href="/u/login">
                                <Button type="submit" className="w-full h-11">Se connecter maintenant !</Button>
                            </Link>
                        </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}