"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Auto-hide success/error message after 5 seconds
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const now = new Date();
    const time = now.toLocaleString();

    emailjs
      .sendForm(
        "service_uuc49wk",
        "template_h9wxo1t",
        form.current,
        "wYE-kTMMpr7qx9cFp",
        { time }
      )
      .then(
        () => {
          setResult({ success: true, message: "Message sent successfully!" });
          form.current.reset();
        },
        () => {
          setResult({
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="block text-slate-700 font-medium mb-2">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-[#F6F7F4] border border-slate-200 rounded-lg text-[#1F2933] placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors shadow-inner"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-slate-700 font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-[#F6F7F4] border border-slate-200 rounded-lg text-[#1F2933] placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors shadow-inner"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label className="block text-slate-700 font-medium mb-2">Subject</label>
        <input
          name="title"
          type="text"
          required
          className="w-full px-4 py-3 bg-[#F6F7F4] border border-slate-200 rounded-lg text-[#1F2933] placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors shadow-inner"
          placeholder="Subject"
        />
      </div>
      <div>
        <label className="block text-slate-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-[#F6F7F4] border border-slate-200 rounded-lg text-[#1F2933] placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none shadow-inner"
          placeholder="Tell me about your project..."
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-700 shadow-[0_10px_30px_-10px_rgba(107,142,35,0.5)] border border-white/20 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
      {result && (
        <div
          className={`mt-4 text-center font-medium ${
            result.success ? "text-emerald-500" : "text-emerald-500"
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  );
}
