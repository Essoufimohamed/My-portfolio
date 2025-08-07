"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 text-center bg-white dark:bg-gray-900 rounded-xl shadow-md max-w-3xl mx-auto mt-10"
        >
            <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                width={150}
                height={150}
                className="mx-auto rounded-full shadow-lg border-t-4 border-b-4 border-green-500"
            />
            <h1 className="text-3xl font-bold mt-6 text-gray-800 dark:text-white">
                Hello, I’m{" "}
                <span className="text-green-400">Mohamed Essoufi</span>
            </h1>
            <p className="text-lg mt-2 text-gray-800 dark:text-gray-300 mb-4">
                Full-Stack Web Developer (MERN Stack)
            </p>

            {/* <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
                I am a passionate web developer specializing in MERN stack
                development (MongoDB, Express.js, React, Node.js).
            </p> */}

            <div className="mt-6 flex justify-center gap-6">
                <a
                    href="https://github.com/Essoufimohamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                    >
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.743.083-.728.083-.728 1.205.084 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.304 3.492.996.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.651.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.373-12-12-12z" />
                    </svg>
                </a>

                <a
                    href="https://linkedin.com/in/mohamedessoufi24"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                    >
                        <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.618c.872-1.19 2.566-1.618 3.846-1.618 3.184 0 5.154 2.276 5.154 5.086v4.914z" />
                    </svg>
                </a>

                <a
                    href="/MOHAMED_ESSOUFI_cv.pdf"
                    download
                    aria-label="Download CV"
                    className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                >
                    Download CV
                </a>
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <Link
                    href="/projects"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                >
                    View My Projects
                </Link>
                <Link
                    href="/contact"
                    className="px-4 py-2 border border-green-600 text-gray-800 dark:text-gray-300 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
                >
                    Contact Me
                </Link>
            </div>
        </motion.main>
    );
}
