import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

import { FormMessage } from "@/Components/ui/form";

import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useState } from "react";

export default function Edit({ auth, client }) {
    const { errors } = usePage().props;
    const { flash } = usePage().props;

    const { data, setData, put, processing, error } = useForm({
     name: client.name,
     surname: client.surname,
     email: client.email,
     phone_number: client.phone_number,
    });

    function handleSubmit(e) {
        e.preventDefault();

        put(route("clients.update", client.id));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Clients
                </h2>
            }
        >
            <Head title={`Clients / Updating ${client.name}`} />

            <div className="border-t h-full">
                <div className="mx-auto max-w-7xl h-full">
                    <div className="overflow-hidden bg-white shadow-sm h-full">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header>
                                <h1 className="font-semibold text-2xl">
                                    Edit a client
                                </h1>
                                <p className="text-neutral-600">
                                    Change the values to edit the client and then save it.
                                </p>
                            </header>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Name
                                    </Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="name"
                                    ></Input>
                                    {errors.name && (
                                        <div className="text-sm text-red-500">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Surname
                                    </Label>
                                    <Input
                                        value={data.surname}
                                        onChange={(e) =>
                                            setData("surname", e.target.value)
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="surname"
                                    ></Input>
                                    {errors.surname && (
                                        <div className="text-sm text-red-500">
                                            {errors.surname}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="email"
                                    ></Input>
                                    {errors.email && (
                                        <div className="text-sm text-red-500">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Phone number
                                    </Label>
                                    <Input
                                        type="tel"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="phone_number"
                                    ></Input>
                                    {errors.phone_number && (
                                        <div className="text-sm text-red-500">
                                            {errors.phone_number}
                                        </div>
                                    )}
                                </div>

                                <Button
                                    className="mr-auto"
                                    type="submit"
                                    onClick={(e) => handleSubmit}
                                >
                                    Save changes
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
