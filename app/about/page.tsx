export default function About() {
    return (
        <section className="p-8 mt-2 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                About Me
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a passionate web developer trained at the Souss Massa Tech
                Academy in Agadir, specializing in MERN stack development
                (MongoDB, Express.js, React, Node.js).
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I also have a background in Economics and Management from Ibn
                Zohr University and experience in building management systems
                and modern web applications.
            </p>
        </section>
    );
}
