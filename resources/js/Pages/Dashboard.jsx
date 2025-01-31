import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="leading-tight text-neutral-600 dark:text-neutral-300">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden dark:bg-neutral-800 border dark:border-neutral-700 border-neutral-200 bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-neutral-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
