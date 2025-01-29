import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export const columns = [
    {
        accessorKey: "room_id",
        header: "Room",
        cell: ({ row }) => {
            let roomId = row.original.room_id;
            return (
                <Link
                    className="underline underline-offset-4"
                    href={route("rooms.show", roomId)}
                >
                    {row.original.name}
                </Link>
            );
        },
    },
    {
        accessorKey: "client_id",
        header: "Client",
        cell: ({ row }) => {
            let clientId = row.original.client_id;
            return <span> {clientId} </span>;
        },
    },
    {
        accessorKey: "number_of_guests",
        header: "Number of guests",
        cell: ({ row }) => {
            let number_of_guests = row.original.number_of_guests;
            return <span> {number_of_guests} </span>;
        },
    },
    {
        accessorKey: "payment_method",
        header: "Date in",
        cell: ({ row }) => {
            let date_in = row.original.date_out;
            return <span> {date_out} </span>;
        },
    },
    {
        accessorKey: "check_in",
        header: "Check-in Date",
        cell: ({ row }) => {
            let check_in = row.original.check_in;
            return <span> {check_in} </span>;
        },
    },
    {
        accessorKey: "check_out",
        header: "Check-out Date",
        cell: ({ row }) => {
            let check_out = row.original.check_out;
            return <span> {check_out} </span>;
        },
    },
    {
        accessorKey: "date_in",
        header: "Date in",
        cell: ({ row }) => {
            let date_in = row.original.date_in;
            return <span> {date_in} </span>;
        },
    },
    {
        accessorKey: "date_out",
        header: "Date out",
        cell: ({ row }) => {
            let date_out = row.original.date_out;
            return <span> {date_out} </span>;
        },
    },
    
    {
        id: "actions",
        cell: ({ row }) => {
            const room = row.original;
            const [open, setOpen] = useState(false);

            function handleDeleteRoom(id) {
                router.delete(route("rooms.destroy", id));
                setOpen(false)
            }

            return (
                <Dialog open={open} onOpenChange={setOpen}>
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
                                onClick={() => {
                                    navigator.clipboard.writeText(room.id)
                                    toast("Room id copied to your clipboard!")
                                }
                                    
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

                            <DialogTrigger>
                                <DropdownMenuItem className="text-red-500">
                                    Delete room
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DialogPortal>
                        <DialogContent>
                            <DialogTitle>
                                Are you sure you want to delete this room?
                            </DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete the room of the database.
                            </DialogDescription>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button>Close</Button>
                                </DialogClose>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleDeleteRoom(room.id)}
                                >
                                    Delete this room
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </DialogPortal>
                </Dialog>
            );
        },
    },
];
