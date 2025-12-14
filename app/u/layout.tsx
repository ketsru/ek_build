

import Nav from "@/components/layouts/nav/desktop_nav"
import Footer from "@/components/layouts/nav/footer"

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}