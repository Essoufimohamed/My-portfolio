import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white">
                <h1 className="text-lg font-bold">MED</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href={"/"} className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/projects"}
                            className="hover:text-gray-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
