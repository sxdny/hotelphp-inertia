import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenu,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/Components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import { Badge } from "@/Components/ui/badge";

import { Link, usePage } from "@inertiajs/react";
import {
    Home,
    AppWindow,
    Bed,
    UserRound,
    BookMarked,
    ChevronUp,
    Hotel,
    LogOut,
    User
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";

// Menu items
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Dashboard",
        url: "dashboard",
        icon: AppWindow,
    },
];

export function AppSidebar() {
    const user = usePage().props.auth.user;
    return (
        <Sidebar className="list-none">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                        <item.icon />
                                        {item.title}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        <SidebarMenu>
                            <Collapsible
                                defaultOpen
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <Hotel />
                                            <span> My hotel </span>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <Link
                                                    href={route("rooms.index")}
                                                >
                                                    <SidebarMenuButton>
                                                        <Bed />
                                                        <span>Rooms</span>
                                                    </SidebarMenuButton>
                                                </Link>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <Link
                                                    href={route(
                                                        "clients.index"
                                                    )}
                                                >
                                                    <SidebarMenuButton>
                                                        <UserRound />
                                                        <span>Clients</span>
                                                    </SidebarMenuButton>
                                                </Link>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <Link
                                                    href={route(
                                                        "clients.index"
                                                    )}
                                                >
                                                    <SidebarMenuButton disabled>
                                                        <BookMarked />
                                                        <span>
                                                            Reservations
                                                        </span>
                                                    </SidebarMenuButton>
                                                </Link>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="h-fit">
                                    <Avatar>
                                        <AvatarFallback>
                                            {user.name.charAt(0) +
                                                user.name
                                                    .split(" ")[1]
                                                    .charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="font-bold">
                                            {" "}
                                            {user.name}{" "}
                                        </span>
                                        <span className="text-[0.75rem] text-neutral-500">
                                            {" "}
                                            {user.email}{" "}
                                        </span>
                                    </div>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem asChild>
                                    <Link href={route("profile.edit")}>
                                    <User />
                                    <span>Account</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                    >
                                        <LogOut />
                                        <span>Log Out</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarFooter />
        </Sidebar>
    );
}
