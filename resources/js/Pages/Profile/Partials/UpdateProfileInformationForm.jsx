import { Link, useForm, usePage } from "@inertiajs/react";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    recentlySuccessful &&
        toast.success("Account information saved succesfully.");

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">
                    Account information
                </h2>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                
                <div className="flex flex-col gap-3">
                    <Label className="font-medium">Name</Label>
                    <Input
                        required
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
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
                    <Label className="font-medium">Email</Label>
                    <Input
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="max-w-[30rem]"
                        htmlFor="email"
                    ></Input>
                    {errors.name && (
                        <div className="text-sm text-red-500">
                            {errors.name}
                        </div>
                    )}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>

                    <Toaster />
                </div>
            </form>
        </section>
    );
}
