import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { AppSidebar } from "@/Components/AppSidebar";

export default function AuthenticatedLayout({ header, children }) {
    return (
        <div className="min-h-screen dark">
            <SidebarProvider>
                <AppSidebar className="list-none"/>
                <main className="flex flex-col w-screen">
                    <header className="dark:bg-neutral-900 bg-white px-5 py-2 flex items-center gap-3">
                        <div>
                            <SidebarTrigger className="dark:text-neutral-50" />
                        </div>
                        {header}
                    </header>
                    <div className="w-full h-full dark:bg-neutral-900 bg-white">{children}</div>
                </main>
            </SidebarProvider>
        </div>
    );
}
