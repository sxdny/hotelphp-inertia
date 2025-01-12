import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

export default function Index({ room }) {
    // Define the room information

    let roomState = {
        value: "",
        color: "",
    };

    if (room.state === "not available") {
        roomState.value = "Not Available";
        roomState.color = {
            text: "red-500",
            bg: "red-100",
            border: "red-500",
        };
    } else if (room.state === "available") {
        roomState.value = "Available";
        roomState.color = "text-green-600";
    } else {
        roomState.value = "Booked";
        roomState.color = "text-yellow-500";
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="leading-tight text-neutral-600">
                    Rooms / {room.name}
                </h2>
            }
        >
            <Head title={`Seeing: ${room.name}`} />
            <Toaster />

            <div className="w-full h-full">
                <div className="mx-auto w-full h-full">
                    <div className="overflow-hidden bg-white w-full h-full shadow-sm">
                        <div className="flex flex-col h-full gap-8 p-6 text-gray-900">
                            <header className="flex border-b pb-8 items-center">
                                <div>
                                    <img className="border rounded-lg object-contain" src="https://placehold.co/100x100/png" alt="" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between h-full px-4">
                                    <h1 className="text-4xl font-semibold">
                                        {room.name}
                                    </h1>
                                    <p className="text-neutral-600">{room.description}</p>
                                </div>
                            </header>

                            <main className="flex flex-col gap-4">
                                <header>
                                    <h2 className="text-lg text-neutral-700 font-semibold">
                                        Details
                                    </h2>
                                </header>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-3 flex-1">
                                        <div className="grid grid-cols-5">
                                            <span className="text-neutral-400">
                                                State
                                            </span>
                                            <span className="text-black col-span-4">
                                                {room.state}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <span className="text-neutral-400">
                                                Type
                                            </span>
                                            <span className="text-black col-span-4">
                                                {room.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 flex-1">
                                        <div className="grid grid-cols-5">
                                            <span className="text-neutral-400">
                                                Capacity
                                            </span>
                                            <span className="text-black col-span-4">
                                                {room.capacity}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <span className="text-neutral-400">
                                                Price
                                            </span>
                                            <span className="text-black col-span-4">
                                                {room.price}€
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </main>

                            <div className="flex-1">
                                <p>
                                    Here is a table with statistics about this room:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
