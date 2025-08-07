"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import logo from "@/public/mohamedessofi_logo.webp";

const navLinks = [
    { href: "/", label: "Who I am" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-gray-900 text-white shadow">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                {/* <h1 className="text-xl font-extrabold tracking-wide uppercase text-white">
                    MED
                </h1> */}
                <Link href={"/"}>
                    <Image
                        className="w-18"
                        src={logo}
                        alt="mohamed essoufi logo"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`relative transition-colors hover:text-gray-400 pb-1 ${
                                    pathname === href ? "text-green-400" : ""
                                }`}
                            >
                                {label}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full bg-green-400 scale-x-0 origin-left transition-transform duration-300 ${
                                        pathname === href
                                            ? "scale-x-100"
                                            : "hover:scale-x-100"
                                    }`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`block py-2 px-1 rounded-md hover:pl-4 transition-normal duration-300 ease-in-out  ${
                                pathname === href
                                    ? "text-green-400"
                                    : "text-white hover:text-gray-300 "
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
