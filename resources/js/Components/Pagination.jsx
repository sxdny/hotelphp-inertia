import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";

export default function Pagination({ links }) {
    return (
        <nav className="flex gap-2 justify-center">
            {links.map((link) => (
                <Button
                    key={link.label}
                    asChild
                    variant={!link.active ? "outline" : ""}
                    className={
                        !link.url
                            ? "text-neutral-400 !bg-neutral-100 cursor-not-allowed"
                            : ""
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
