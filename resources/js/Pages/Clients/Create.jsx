import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";

import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function Create({ auth }) {
    const { errors } = usePage().props;
    const { flash } = usePage().props;

    const { data, setData, post, progress } = useForm({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        phone_number: "",
        img_url: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("clients.store"));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Clients
                </h2>
            }
        >
            <Head title="Clients" />

            <div className="border-t">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden bg-white">
                        <div className="flex flex-col gap-8 p-6 text-gray-900">
                            <header>
                                <h1 className="font-semibold text-2xl">
                                    Create a new client
                                </h1>
                                <p className="text-neutral-600">
                                    Fill the form to create a new client and
                                    store it into the database.
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
                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Profile image
                                    </Label>
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData(
                                                "img_url",
                                                e.target.files[0]
                                            )
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="img_url"
                                    ></Input>
                                    {errors.img_url && (
                                        <div className="text-sm text-red-500">
                                            {errors.img_url}
                                        </div>
                                    )}
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                </div>

                                <hr className="my-4" />

                                <p className="text-sm text-neutral-500">
                                    The following fields are required to create
                                    the user account.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Username
                                    </Label>
                                    <Input
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="username"
                                    ></Input>
                                    {errors.username && (
                                        <div className="text-sm text-red-500">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Password
                                    </Label>
                                    <Input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="password"
                                    ></Input>
                                    {errors.password && (
                                        <div className="text-sm text-red-500">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label className="font-semibold">
                                        Confirm password
                                    </Label>
                                    <Input
                                        type="password"
                                        value={data.confirmPassword}
                                        onChange={(e) =>
                                            setData(
                                                "confirmPassword",
                                                e.target.value
                                            )
                                        }
                                        className="max-w-[30rem]"
                                        htmlFor="confirmPassword"
                                    ></Input>
                                    {errors.confirmPassword && (
                                        <div className="text-sm text-red-500">
                                            {errors.confirmPassword}
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
