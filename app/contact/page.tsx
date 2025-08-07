"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquareText, User } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(
                "service_6wcba9p", // replace
                "template_uppumnf", // replace
                formRef.current!,
                "1OtfoL3NnIY7VuZRV" // replace
            )
            .then(() => {
                toast.success("Message sent successfully!", {
                    // id: "contact-toast",
                    duration: 3000,
                });
                setStatus("Message sent successfully!");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to send message. Try again.", {
                    duration: 3000,
                    // id: "contact-toast",
                });
                setStatus("Failed to send message.");
            });
    };

    return (
        <section className="max-w-lg mx-auto my-12 px-6 py-10 rounded-3xl border border-gray-200 shadow-lg bg-white dark:bg-gray-900 dark:border-gray-700 transition-all">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Contact Me
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                {/* Inputs here - name, email, message - same as before */}
                {/* (Refer to the previous code I gave you for styling) */}
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        Name
                    </label>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl px-3 focus-within:ring-2 focus-within:ring-green-500 transition">
                        <User
                            className="text-gray-500 dark:text-gray-400 mr-2"
                            size={18}
                        />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full py-2 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        Email
                    </label>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl px-3 focus-within:ring-2 focus-within:ring-green-500 transition">
                        <Mail
                            className="text-gray-500 dark:text-gray-400 mr-2"
                            size={18}
                        />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="w-full py-2 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="relative">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        Message
                    </label>
                    <div className="flex items-start border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-green-500 transition">
                        <MessageSquareText
                            className="text-gray-500 dark:text-gray-400 mr-2 mt-1"
                            size={18}
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            rows={5}
                            className="w-full bg-transparent outline-none resize-none text-gray-800 dark:text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl"
                >
                    Send Message
                </button>

                {status && (
                    <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-300">
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}
