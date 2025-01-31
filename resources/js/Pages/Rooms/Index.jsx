import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { Button } from "@/Components/ui/button";
import { PlusIcon } from "lucide-react";
import { useEffect } from "react";

import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

export default function Index({ rooms }) {
    const { flash } = usePage().props;

    // Displaying the flash messages
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={<h2 className="leading-tight text-neutral-600 dark:text-neutral-400">Rooms</h2>}
        >
            <Head title="Rooms" />
            <Toaster richColors />

            <div>
                <div className="mx-auto">
                    <div className="overflow-hidden ">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-semibold text-2xl dark:text-neutral-50">
                                        List of rooms
                                    </h1>
                                    <p className="text-neutral-600 dark:text-neutral-300">
                                        Here you can see all the rooms of your
                                        database.
                                    </p>
                                </div>
                                <div>
                                    <Button>
                                        <Link href={route("rooms.create")}>
                                            Create a new room
                                        </Link>
                                        <PlusIcon />
                                    </Button>
                                </div>
                            </header>
                            <Pagination links={rooms.meta.links} />

                            <DataTable data={rooms.data} columns={columns} />

                            <Pagination links={rooms.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
