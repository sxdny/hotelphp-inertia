import { Button } from "@/Components/ui/button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-semibold text-neutral-900">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-neutral-600 max-w-xl">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <AlertDialog>
                <AlertDialogTrigger>
                    <Button variant="destructive">Delete Account</Button>
                </AlertDialogTrigger>
                <form onSubmit={deleteUser} className="p-6">
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                {" "}
                                Are you sure you want to delete your account?{" "}
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Once your account is deleted, all of its
                                resources and data will be permanently deleted.
                                Please enter your password to confirm you would
                                like to permanently delete your account.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <div className="flex flex-col gap-3 my-2">
                            <Input
                                placeholder="Password"
                                type="password"
                                required
                                autoComplete="current-password"
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

                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>

                            <Button onClick={deleteUser} variant="destructive" type="submit">
                                Confirm deletion
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </form>
            </AlertDialog>

            <Modal show={confirmingUserDeletion} onClose={closeModal}></Modal>
        </section>
    );
}
