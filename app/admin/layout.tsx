

import AppSidebar from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full m-4">
        <div className="shadow-xs rounded-sm p-4 bg-gray-100">
            <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}