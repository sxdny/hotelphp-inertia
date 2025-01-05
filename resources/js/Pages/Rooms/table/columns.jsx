import { MoreHorizontal } from "lucide-react";
import { Link, router } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "state",
        header: "State",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "capacity",
        header: "Capacity",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const room = row.original;

            function handleDeleteRoom(id) {
                if (
                    window.confirm("Are you sure you want to delete this room?")
                ) {
                    // destroy the room
                    router.delete(route("rooms.destroy", id));
                } else {
                    return;
                }
            }

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open Menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(room.id)
                            }
                        >
                            Copy room ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={route("rooms.edit", room.id)}>
                                Edit room
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="text-red-500"
                            onClick={() => handleDeleteRoom(room.id)}
                        >
                            Delete room
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
