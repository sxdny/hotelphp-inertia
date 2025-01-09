import { MoreHorizontal, ArrowUpDown } from "lucide-react";
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
        cell: ({row}) => {
            let description = row.original.description
            description = description.split(' ').slice(0,10).join(' ') + "..."
            return (
                <span> {description} </span>
            )
        }
    },
    {
        accessorKey: "state",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-transparent px-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting()}
                >
                    State
                    {
                        {
                            asc: " (Ascending)",
                            desc: " (Descending)",
                        }[column.getIsSorted() ?? null]
                    }
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const state = row.original.state;
            switch (state) {
                case "not available":
                    return (
                        <span className="text-red-500 truncate"> Not available </span>
                    );
                case "available":
                    return <span className="text-green-600"> Available </span>;
                case "booked":
                    return <span className="text-yellow-500"> Booked </span>;
                default:
                    "State";
                    break;
            }
        },
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => {
            const type = row.original.type;

            switch (type) {
                case "studio":
                    return <span> Studio </span>;
                case "presidential":
                    return <span> Presidential </span>;
                case "double":
                    return <span> Double </span>;
                case "single":
                    return <span> Single</span>;
                default:
                    "Type";
                    break;
            }
        },
    },
    {
        accessorKey: "capacity",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-transparent px-0 text-right"
                    variant="ghost"
                    onClick={() => column.toggleSorting()}
                >
                    Capacity
                    {
                        {
                            asc: " (Ascending)",
                            desc: " (Descending)",
                        }[column.getIsSorted() ?? null]
                    }
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const capacity = row.original.capacity;

            return <span className="text-right"> {capacity} </span>;
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-transparent px-0 text-right"
                    variant="ghost"
                    onClick={() => column.toggleSorting()}
                >
                    Price
                    {
                        {
                            asc: " (Ascending)",
                            desc: " (Descending)",
                        }[column.getIsSorted() ?? null]
                    }
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const price = row.original.price;

            return <span className="text-right"> {price}€ </span>;
        },
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
