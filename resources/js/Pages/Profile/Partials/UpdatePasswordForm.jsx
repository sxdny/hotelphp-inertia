import { Toaster } from "sonner";
import { toast } from "sonner";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    recentlySuccessful && toast("Password updated succesfully.");

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                    Update Password
                </h2>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className="flex flex-col gap-3">
                    <Label className="font-medium">Current password</Label>
                    <Input
                        type="password"
                        required
                        autoComplete="current-password"
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        className="max-w-[30rem]"
                        htmlFor="current_password"
                    ></Input>
                    {errors.current_password && (
                        <div className="text-sm text-red-500">
                            {errors.current_password}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <Label className="font-medium">New password</Label>
                    <Input
                        required
                        type="password"
                        autoComplete="new-password"
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
                    <Label className="font-medium">Confirm password</Label>
                    <Input
                        required
                        type="password"
                        autoComplete="new-password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        className="max-w-[30rem]"
                        htmlFor="password_confirmation"
                    ></Input>
                    {errors.password_confirmation && (
                        <div className="text-sm text-red-500">
                            {errors.password_confirmation}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>
                </div>

                <Toaster />
            </form>
        </section>
    );
}
