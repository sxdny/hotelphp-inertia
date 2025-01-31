import { Checkbox } from "@/Components/ui/checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <main className="flex flex-col items-center justify-center mx-auto my-auto">
                <header>
                    <h2 className="text-4xl font-semibold text-center text-neutral-100 tracking-tight">
                        Welcome to HotelPHP!
                    </h2>
                </header>

                <form
                    onSubmit={submit}
                    className="flex flex-col gap-1 my-10 bg-neutral-950 p-12 border border-neutral-800 rounded-xl"
                >
                    <div>
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
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        {errors.email && (
                            <div className="text-sm text-red-500 mt-3">
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
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        {errors.password && (
                            <div className="text-sm text-red-500 mt-3">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div className="mt-4 block flex items-center gap-3">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(e) => setData("remember", e)}
                        />
                        <Label htmlFor="remember" value="Remember me">
                            Remember me
                        </Label>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 justify-between">
                        <div className="flex items-center justify-end">
                            {canResetPassword && (
                                <Link
                                    className="hover:underline dark:hover:text-neutral-100 underline-offset-4 dark:text-neutral-300 text-sm"
                                    href={route("password.request")}
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <Button
                                type="submit"
                                className="ms-4"
                                disabled={processing}
                            >
                                Log in
                            </Button>
                        </div>

                        <Link
                            className="text-center mt-4 hover:underline dark:hover:text-neutral-100 underline-offset-4 dark:text-neutral-500 text-sm"
                            href={route("password.request")}
                        >
                            Don't have an account?
                        </Link>
                    </div>
                </form>
            </main>
        </GuestLayout>
    );
}
