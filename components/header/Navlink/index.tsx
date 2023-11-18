import Link from "next/link";

type Props = {
    href: string | undefined,
    children: React.ReactNode
}

export default function NavLink({ href="/" , children }: Props) {
    return (
        <Link
            href={href}
            className="hover:text-red-700 dark:hover:text-red-500"
        >
            { children }
        </Link>
    );
}
