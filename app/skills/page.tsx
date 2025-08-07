"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
export default function Skills() {
    const skills = {
        frontend: [
            "React.js",
            "JavaScript (ES6+)",
            "Typescript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "ShadCN",
            "Responsive Design",
        ],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB", "Mongoose"],
        tools: ["Git", "GitHub", "VS Code", "Jira", "Figma", "Canva"],
        automation: ["Make", "n8n"],
    };
    return (
        <div className="p-5">
            <motion.section
                className="flex-1 max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Skills Section */}
                <div className="">
                    <div className="flex items-center gap-3 mb-4">
                        <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Tech Stack & Skills
                        </h3>
                    </div>

                    {/* Loop through each skill group */}
                    {Object.entries(skills).map(([category, list]) => (
                        <div key={category} className="mb-6">
                            <h4 className="capitalize font-medium text-gray-600 dark:text-gray-400 mb-2">
                                {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {list.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
