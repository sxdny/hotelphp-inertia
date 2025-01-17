import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import { Head, Link, router } from "@inertiajs/react";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { Button } from "@/Components/ui/button";
import { PlusIcon } from "lucide-react";

import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

export default function Index({ clients, flash }) {
    // Displaying the flash messages
    flash.success && toast.success("Room was deleted succesfully!");
    flash.error && toast("There was an error my guy.");

    return (
        <AuthenticatedLayout
            header={<h2 className="leading-tight text-neutral-600">Clients</h2>}
        >
            <Head title="Rooms" />
            <Toaster richColors />

            <div>
                <div className="mx-auto">
                    <div className="overflow-hidden bg-white shadow-sm">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-semibold text-2xl">
                                        List of clients
                                    </h1>
                                    <p className="text-neutral-600">
                                        Here you can see all the clients of your
                                        database.
                                    </p>
                                </div>
                                <div>
                                    <Button>
                                        <Link href={route("clients.create")}>
                                            Create a new client
                                        </Link>
                                        <PlusIcon />
                                    </Button>
                                </div>
                            </header>
                            <Pagination links={clients.meta.links} />

                            <DataTable data={clients.data} columns={columns} />

                            <Pagination links={clients.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
