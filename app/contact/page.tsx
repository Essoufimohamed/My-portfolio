export default function Contact() {
    return (
        <section className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-2 border rounded"
                />
                <textarea
                    placeholder="Your message"
                    className="w-full p-2 border rounded"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Envoyer
                </button>
            </form>
        </section>
    );
}
