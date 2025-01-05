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

export default function Create({ auth }) {
    const { errors } = usePage().props;
    const { flash } = usePage().props;

    const { data, setData, post, processing, error } = useForm({
        name: "",
        description: "",
        state: "",
        type: "",
        capacity: "",
        price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route("rooms.store"));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Rooms
                </h2>
            }
        >
            <Head title="Rooms" />

            <div className="border-t">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden bg-white shadow-sm">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header>
                                <h1 className="font-semibold text-2xl">
                                    Create a room
                                </h1>
                                <p className="text-neutral-600">
                                    Fill the form to create a new room.
                                </p>
                            </header>

                            {flash.success && (
                                <div class="alert">{flash.success}</div>
                            )}

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
                                        Description
                                    </Label>
                                    <Textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Type the description of the room here."
                                        className="max-w-[30rem] resize-none"
                                    />
                                    {errors.description && (
                                        <div className="text-sm text-red-500">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        State
                                    </Label>
                                    <Select
                                        defaultValue={data.state}
                                        onValueChange={(e) =>
                                            setData("state", e)
                                        }
                                    >
                                        <SelectTrigger className="max-w-[10rem]">
                                            <SelectValue placeholder="Select a state..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="available">
                                                Available
                                            </SelectItem>
                                            <SelectItem value="booked">
                                                Booked
                                            </SelectItem>
                                            <SelectItem value="not available">
                                                Not available
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.state && (
                                        <div className="text-sm text-red-500">
                                            {errors.state}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Type
                                    </Label>
                                    <Select
                                        defaultValue={data.type}
                                        onValueChange={(e) =>
                                            setData("type", e)
                                        }
                                    >
                                        <SelectTrigger className="max-w-[10rem]">
                                            <SelectValue placeholder="Select a type..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="studio">
                                                Studio
                                            </SelectItem>
                                            <SelectItem value="single">
                                                Single
                                            </SelectItem>
                                            <SelectItem value="double">
                                                Double
                                            </SelectItem>
                                            <SelectItem value="presidential">
                                                Presidential
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.type && (
                                        <div className="text-sm text-red-500">
                                            {errors.type}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Capacity
                                    </Label>
                                    <Input
                                        type="number"
                                        className="max-w-[30rem]"
                                        htmlFor="capacity"
                                        onChange={(e) =>
                                            setData("capacity", e.target.value)
                                        }
                                    ></Input>
                                    {errors.capacity && (
                                        <div className="text-sm text-red-500">
                                            {errors.capacity}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Price
                                    </Label>
                                    <Input
                                        type="number"
                                        className="max-w-[30rem]"
                                        htmlFor="price"
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                    ></Input>
                                    {errors.price && (
                                        <div className="text-sm text-red-500">
                                            {errors.price}
                                        </div>
                                    )}
                                </div>

                                <Button
                                    className="mr-auto"
                                    type="submit"
                                    onClick={(e) => handleSubmit}
                                >
                                    Create
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
