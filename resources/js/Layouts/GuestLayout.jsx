export default function GuestLayout({ children }) {
    return (
        <div className="dark flex flex-col min-h-screen w-screen dark:bg-neutral-900">
            <div className="flex flex-1 flex-col w-full h-full overflow-hidden dark:bg-neutral-900 bg-white">
                {children}
            </div>
        </div>
    );
}
