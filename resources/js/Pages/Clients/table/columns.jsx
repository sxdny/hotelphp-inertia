import { MoreHorizontal, ArrowUpDown, ClipboardCheckIcon } from "lucide-react";
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
import { toast } from "sonner"

export const columns = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            let clientId = row.original.id;
            let clientName = row.original.name;
            let clientSurname = row.original.surname;
            return (
                <Link
                    className="underline underline-offset-4"
                    href={route("clients.show", clientId)}
                >
                    {clientName + " " + clientSurname}
                </Link>
            );
        },
    },
    {
        accessorKey: "phone_number",
        header: "Phone number",
        cell: ({ row }) => {
            let phone_number = row.original.phone_number;
            return <span> {phone_number} </span>;
        },
    },
    {
        accessorKey: "state",
        header: "Email",
        cell: ({ row }) => {
            let email = row.original.email;
            return <span> {email} </span>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const client = row.original;
            const [open, setOpen] = useState(false);

            function handleDeleteRoom(id) {
                router.delete(route("clients.destroy", id));
                setOpen(false);
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
                                    navigator.clipboard.writeText(client.id)
                                    toast("Client id copied to your clipboard!", {
                                        icon: <ClipboardCheckIcon />,
                                    });
                                }
                                    
                                }
                            >
                                Copy client ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={route("clients.edit", client.id)}>
                                    Edit client
                                </Link>
                            </DropdownMenuItem>

                            <DialogTrigger>
                                <DropdownMenuItem className="text-red-500">
                                    Delete client
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DialogPortal>
                        <DialogContent>
                            <DialogTitle>
                                Are you sure you want to delete this client?
                            </DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete the client of the database.
                            </DialogDescription>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button>Close</Button>
                                </DialogClose>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleDeleteRoom(client.id)}
                                >
                                    Delete this client
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </DialogPortal>
                </Dialog>
            );
        },
    },
];
