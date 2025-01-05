import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="leading-tight text-neutral-600">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="w-full bg-white">
                <div className="">
                    <div className="bg-white p-4 sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>

                    <div className="bg-white p-4 sm:p-8">
                        <UpdatePasswordForm className="" />
                    </div>

                    <div className="bg-white p-4 sm:p-8">
                        <DeleteUserForm className="" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
