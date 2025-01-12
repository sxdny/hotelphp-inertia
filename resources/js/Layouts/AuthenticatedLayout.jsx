import { usePage } from "@inertiajs/react";
import { useState } from "react";

import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { AppSidebar } from "@/Components/AppSidebar";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const { flash } = usePage().props;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <SidebarProvider>
                <AppSidebar className="list-none"/>
                <main className="flex flex-col bg-white w-screen">
                    <header className="bg-white px-5 py-2 flex items-center gap-3">
                        <div className="border-r pr-2">
                            <SidebarTrigger />
                        </div>
                        <span className="text-sm text-neutral-600">
                            {header}
                        </span>
                    </header>
                    <div className="w-full h-full bg-white">{children}</div>
                </main>
            </SidebarProvider>
        </div>
    );
}
