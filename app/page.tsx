import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="p-6 text-center bg-white dark:bg-gray-900 rounded-xl shadow-md max-w-xl mx-auto mt-10">
            <Image
                src="/images/profile.jpeg"
                alt="Profile photo"
                width={150}
                height={150}
                className="mx-auto rounded-full shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-6 text-gray-800 dark:text-white">
                Hello, I’m Mohamed Essoufi
            </h1>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                Full-Stack Web Developer (MERN Stack)
            </p>
            <div className="mt-6 flex justify-center gap-4">
                <Link
                    href="/projects"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                >
                    View My Projects
                </Link>
                <Link
                    href="/contact"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
                >
                    Contact Me
                </Link>
            </div>
        </main>
    );
}
