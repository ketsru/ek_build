"use client"

import { UsersFlowChart } from "@/components/layouts/admin/dashboard/users_flow_chart"
import { UserBrowserChart } from "@/components/layouts/admin/dashboard/browsers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useState } from "react"
import { BellPlus, LayoutDashboard } from "lucide-react"

type Notification = {
    id: string
    source: string
    content: string
    createdAt: string
    isRead: boolean
}

const initialNotifications: Notification[] = [
    {
        id: "jvdffv",
        source: "Système",
        content: "Un nouveau utilisateur s'est inscrit.",
        createdAt: "12/12/2025",
        isRead: false,
    },
    {
        id: "jvdeezffv",
        source: "ETSRU Komi",
        content: "Je n'arrive pas à utiliser le système, c'est trop compliqué pour moi.",
        createdAt: "12/12/2025",
        isRead: false,
    },
]

export default function Dashboard() {
    const [notifications, setNotifications] = useState(initialNotifications)

    const markAsRead = (id: string) => {
        setNotifications(prev =>
            prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
        )
    }

    return (
        <div className="w-full">
            <h2 className="md:text-3xl text-xl font-extrabold py-4 flex gap-2 items-center">
                <LayoutDashboard size={20} />
                Tableau de bord
            </h2>

            <div className="lg:flex gap-6 w-full">
                {/* ===== Charts ===== */}
                <div className="flex flex-col gap-6 w-full">
                    <div className=""> 
                        <div> 
                            <UsersFlowChart /> 
                        </div> 
                        <div className="mt-6"> 
                            <UserBrowserChart /> 
                        </div> 
                    </div>
                </div>

                {/* ===== Notifications ===== */}
                <div className="max-w-xs rounded-xs shadow-md p-4 bg-white lg:mt-0 mt-6">
                    <h3 className="text-lg font-extrabold flex gap-2 mb-4">
                        <BellPlus />
                        Notifications
                    </h3>

                    {notifications.map(notification => (
                        <Card
                            key={notification.id}
                            className={`border mt-4 p-3 shadow-none ${
                                !notification.isRead ? "border-blue-100 bg-blue-50" : ""
                            }`}
                        >
                            <CardHeader className="flex justify-between items-center px-2">
                                <span className="font-medium text-xs border py-0.5 px-2 rounded-md">{notification.source}</span>
                                <span className="text-xs text-gray-500">
                                    {notification.createdAt}
                                </span>
                            </CardHeader>

                            <CardContent className="-py-4 px-2">
                                <p className="truncate text-xs">{notification.content}</p>
                            </CardContent> 

                            <CardFooter className="flex justify-end gap-2">
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => alert(notification.content)}
                                    className="text-xs"
                                >
                                    Lire plus
                                </Button>
                                {!notification.isRead && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => markAsRead(notification.id)}
                                        className="text-xs"
                                    >
                                        Marqué comme lu
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
