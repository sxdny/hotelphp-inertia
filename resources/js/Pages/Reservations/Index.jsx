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

export default function Index({ reservations }) {
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
            header={<h2 className="leading-tight text-neutral-600">Reservations</h2>}
        >
            <Head title="All the reservations" />
            <Toaster richColors />

            <div>
                <div className="mx-auto">
                    <div className="overflow-hidden bg-white shadow-sm">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-semibold text-2xl">
                                        List of reservations
                                    </h1>
                                    <p className="text-neutral-600">
                                        Here you can see all the reservations
                                        of your hotel.
                                    </p>
                                </div>
                                <div>
                                    <Button>
                                        <Link href={route("reservations.create")}>
                                            Create a new reservations
                                        </Link>
                                        <PlusIcon />
                                    </Button>
                                </div>
                            </header>
                            <Pagination links={reservations.meta.links} />

                            <DataTable data={reservations.data} columns={columns} />

                            <Pagination links={reservations.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
