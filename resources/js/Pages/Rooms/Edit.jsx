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

export default function Edit({ auth, room }) {
    const { errors } = usePage().props;
    const { flash } = usePage().props;

    console.log("Editing room:", room)

    const { data, setData, put, processing, error } = useForm({
        name: room.name,
        description: room.description,
        state: room.state,
        type: room.type,
        capacity: room.capacity,
        price: room.price,
    });

    function handleSubmit(e) {
        e.preventDefault();

        put(route("rooms.update", room.id));
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

            <div className="border-t h-full">
                <div className="mx-auto max-w-7xl h-full">
                    <div className="overflow-hidden bg-white shadow-sm h-full">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header>
                                <h1 className="font-semibold text-2xl">
                                    Edit a room
                                </h1>
                                <p className="text-neutral-600">
                                    Change the values to edit the room and then save it.
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
                                        defaultValue={data.capacity}
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
                                        defaultValue={data.price}
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
                                    Edit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
