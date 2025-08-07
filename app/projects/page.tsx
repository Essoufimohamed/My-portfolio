"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    title: string;
    description?: string;
    images: string[];
    github: string;
    demo?: string;
    tags: string[];
}

const projects: Project[] = [
    {
        title: "Mortgage Calculator",
        description:
            "A simple mortgage calculator app to estimate monthly payments based on principal, interest, and term.",
        images: ["/images/mortgage.jpg", "/images/mortgage_2.jpg"],
        github: "https://github.com/Essoufimohamed/Mortgage-Calculator-Challenge",
        demo: "https://mortgage-calculator-96xsprr1p-mohamedessoufi-projects.vercel.app",
        tags: ["JavaScript", "HTML5", "CSS3"],
    },
    {
        title: "Système de gestion des étudiants",
        description:
            "A comprehensive student management system for handling records, grades, and course registrations.",
        images: ["/images/management_student.jpg"],
        github: "https://github.com/Essoufimohamed/sms-jadara",
        demo: "https://sms-jadara.example.com",
        tags: [
            "MERN",
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "ShadCn",
            "JWT",
        ],
    },

    {
        title: "Maalem",
        description:
            "A Smart Artisan Booking App that connects users with verified local artisans such as plumbers and electricians",
        images: [
            "/images/maalem_1.png",
            "/images/maalem_2.png",
            "/images/maalem_3.png",
            "/images/maalem_4.png",
            "/images/maalem_5.png",
        ],
        github: "https://github.com/Essoufimohamed/maalem-app",
        demo: "https://maalem.example.com",
        tags: [
            "MERN",
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "ShadCn",
            "Socket.io",
            "JWT",
        ],
    },
];

export default function Projects() {
    // Track current image index per project (store indexes in an array)
    const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

    // Handlers to change images per project
    const prevImage = (projIdx: number) => {
        setCurrentIndexes((cur) =>
            cur.map((idx, i) =>
                i === projIdx
                    ? idx === 0
                        ? projects[i].images.length - 1
                        : idx - 1
                    : idx
            )
        );
    };

    const nextImage = (projIdx: number) => {
        setCurrentIndexes((cur) =>
            cur.map((idx, i) =>
                i === projIdx
                    ? idx === projects[i].images.length - 1
                        ? 0
                        : idx + 1
                    : idx
            )
        );
    };

    return (
        <section className="p-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-green-900   ">
                My Projects
            </h2>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {projects.map((proj, projIdx) => (
                    <motion.div
                        key={projIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: projIdx * 0.15 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        {/* Image Carousel */}
                        <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 select-none">
                            <AnimatePresence initial={false} mode="wait">
                                <motion.div
                                    key={currentIndexes[projIdx]}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative w-full h-48"
                                >
                                    <Image
                                        src={
                                            proj.images[currentIndexes[projIdx]]
                                        }
                                        alt={`${proj.title} screenshot ${
                                            currentIndexes[projIdx] + 1
                                        }`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover rounded-t-2xl"
                                        priority={projIdx === 0} // prioritize first project image load
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Prev / Next Buttons */}
                            {proj.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => prevImage(projIdx)}
                                        aria-label="Previous Image"
                                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-100 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                                    >
                                        <ChevronLeft color="green" size={20} />
                                    </button>
                                    <button
                                        onClick={() => nextImage(projIdx)}
                                        aria-label="Next Image"
                                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-100 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                                    >
                                        <ChevronRight color="green" size={20} />
                                    </button>
                                </>
                            )}

                            {/* Indicators */}
                            {proj.images.length > 1 && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                                    {proj.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() =>
                                                setCurrentIndexes((cur) =>
                                                    cur.map((c, i) =>
                                                        i === projIdx ? idx : c
                                                    )
                                                )
                                            }
                                            aria-label={`Go to image ${
                                                idx + 1
                                            }`}
                                            className={`w-3 h-3 rounded-full transition ${
                                                currentIndexes[projIdx] === idx
                                                    ? "bg-green-600"
                                                    : "bg-green-300 dark:bg-green-500"
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                {proj.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                                {proj.description}
                            </p>
                            {/* Tags */}
                            <div className="mb-4 flex flex-wrap gap-2">
                                {proj.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 hover:bg-green-900 cursor-pointer dark:text-green-100 px-3 py-1 rounded-full "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-auto flex gap-3">
                                <Link
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                                >
                                    View on GitHub
                                </Link>

                                {proj.demo && (
                                    <Link
                                        href={proj.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                                    >
                                        Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
