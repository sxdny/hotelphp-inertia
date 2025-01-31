import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <main className="flex flex-col items-center justify-center mx-auto my-auto">
                <header>
                    <Link
                        href="/"
                        className="text-5xl font-semibold text-center text-neutral-100 tracking-tight"
                    >
                        HotelPHP
                    </Link>
                </header>

                <form
                    className="flex flex-col gap-1 my-10 bg-neutral-950 p-12 border border-neutral-800 rounded-xl"
                    onSubmit={submit}
                >
                    <div className="flex flex-col gap-3">
                        <Label className="font-semibold">Name</Label>

                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        {errors.name && (
                            <div className="text-sm text-red-500">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="email" value="Email">
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        {errors.email && (
                            <div className="text-sm text-red-500">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password" value="Password">
                            Password
                        </Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        {errors.password && (
                            <div className="text-sm text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <Label
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        >
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        {errors.password_confirmation && (
                            <div className="text-sm text-red-500">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Button className="text-neutral-600" variant="link">
                            <Link href={route("login")}>
                                Already registered?
                            </Link>
                        </Button>

                        <Button className="ms-4" disabled={processing}>
                            Register
                        </Button>
                    </div>
                </form>
            </main>
        </GuestLayout>
    );
}
