import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";

export default function Pagination({ links }) {
    return (
        <nav className="flex gap-2 justify-center">
            {links.map((link) => (
                <Button
                    key={link.label}
                    asChild
                    variant={!link.active ? "secondary" : "secondary"}
                    className={
                        !link.url
                            ? "text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
                            : "border border-neutral-300 dark:border-neutral-500"
                    }
                >
                    <Link
                        preserveScroll
                        href={link.url || ""}
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                </Button>
            ))}
        </nav>
    );
}
