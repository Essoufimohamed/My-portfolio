import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Système de gestion des étudiants",
            image: "/images/management_student.jpg",
            github: "https://github.com/Essoufimohamed/sms-jadara",
        },
        {
            title: "Mortgage Calculator",
            image: "/images/mortgage.jpg",
            github: "https://github.com/Essoufimohamed/Mortgage-Calculator-Challenge",
        },
    ];

    return (
        <section className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                My Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                {proj.title}
                            </h3>
                            <Link
                                href={proj.github}
                                target="_blank"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
