import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {

   const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="leading-tight text-neutral-600">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <div className="flex-1 h-full">
                <main className='flex flex-col gap-8 p-6 text-gray-900'>
                 <header>
                     <h1 className="font-semibold text-2xl">
                         Welcome {user.name}!                     </h1>
                     <p className="pt-1 text-neutral-600">
                         Here you see the details about
                         your hotel. 
                     </p>
                 </header>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
