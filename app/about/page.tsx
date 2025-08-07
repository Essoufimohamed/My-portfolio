// export default function About() {
//     return (
//         <section className="p-8 mt-2 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//                 About Me
//             </h2>
//             <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
//                 I am a passionate web developer trained at the Souss Massa Tech
//                 Academy in Agadir, specializing in MERN stack development
//                 (MongoDB, Express.js, React, Node.js).
//             </p>
//             <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
//                 I also have a background in Economics and Management from Ibn
//                 Zohr University and experience in building management systems
//                 and modern web applications.
//             </p>
//         </section>
//     );
// }

"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutMe() {
    return (
        <>
            <div className="flex flex-col gap-6 p-6">
                <motion.section
                    className="flex-1 max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* About Me Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            About Me
                        </h2>
                    </div>

                    {/* About Me Text */}
                    <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        <p>
                            I’m <strong>Mohamed Essoufi</strong>, a passionate{" "}
                            <strong>full-stack web developer</strong>{" "}
                            specializing in the <strong>MERN stack</strong>{" "}
                            (MongoDB, Express.js, React.js, Node.js). With a
                            background in{" "}
                            <strong>Economics and Management</strong>, I
                            transitioned into tech through an intensive
                            full-stack program at{" "}
                            <strong>Souss Massa Tech Academy</strong> in Agadir.
                        </p>

                        <p>
                            I’m also a certified graduate of the{" "}
                            <strong>
                                GoMyCode Software Developer Bootcamp (2025)
                            </strong>
                            , where I built a strong foundation in JavaScript,
                            modern frontend technologies, backend development,
                            and API architecture.
                        </p>

                        <p>
                            In addition to development, I explore{" "}
                            <strong>automation</strong> using tools like{" "}
                            <strong>Make</strong> and <strong>n8n</strong> to
                            streamline workflows and connect services more
                            efficiently.
                        </p>

                        <p>
                            I focus on building <strong>scalable</strong>,{" "}
                            <strong>secure</strong>, and{" "}
                            <strong>high-performance</strong> web applications.
                            I love working across the entire stack — from
                            crafting clean <strong>backend APIs</strong> to
                            designing{" "}
                            <strong>responsive, user-friendly frontends</strong>
                            .
                        </p>
                    </div>
                </motion.section>
            </div>
        </>
    );
}
