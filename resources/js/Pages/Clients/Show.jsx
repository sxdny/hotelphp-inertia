import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function Index({ client, avatar_url }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="leading-tight text-neutral-600">
                    Clients / {client.name}
                </h2>
            }
        >
            <Head title={`Seeing: ${client.name}`} />
            <Toaster />

            <div className="w-full h-full">
                <div className="mx-auto w-full h-full">
                    <div className="overflow-hidden bg-white w-full h-full shadow-sm">
                        <div className="flex flex-col h-full gap-8 p-6 text-gray-900">
                            <header className="flex border-b pb-8 items-center">
                                <div>
                                    <Avatar>
                                        <AvatarImage src={avatar_url} />
                                        <AvatarFallback>
                                         {client.name}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="flex flex-1 flex-col justify-between h-full px-4">
                                    <h1 className="text-4xl font-semibold">
                                        {client.name}
                                    </h1>
                                    <p className="text-neutral-600">
                                        {client.surname}
                                    </p>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
