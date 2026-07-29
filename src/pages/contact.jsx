import { useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import useTypeWriter from "../hooks/useTypeWriter";

export default function Contact() {
  const { lines, typeLine } = useTypeWriter();

  useEffect(() => {
    const runContactIntro = async () => {
      await typeLine("akashy9810@gmail.com");
      await typeLine("+91 7503592928");
      await typeLine("New Delhi, India");
    };

    runContactIntro();
  }, []);

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-green-400">
            ~/contact
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Let's Connect
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            I'm a Computer Science Engineering student and Full
            Stack Developer focused on building modern, practical
            web applications.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <h2 className="mb-6 text-xl font-semibold">
              Contact Information
            </h2>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:akashy9810@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-green-500"
              >
                <Mail className="shrink-0 text-green-400" />

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="break-all font-mono text-green-400">
                    {lines[0] || ""}
                    {lines.length < 2 && (
                      <span className="animate-pulse">_</span>
                    )}
                  </p>
                </div>
              </a>

              <a
                href="tel:+917503592928"
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-green-500"
              >
                <Phone className="shrink-0 text-green-400" />

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-mono text-green-400">
                    {lines[1] || ""}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4">
                <MapPin className="shrink-0 text-green-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-mono">
                    {lines[2] || ""}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">

              <a
                href="https://github.com/aka75035"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-5 py-3 font-mono text-sm transition hover:border-green-500 hover:text-green-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/akash-yadav-717557291/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-5 py-3 font-mono text-sm transition hover:border-green-500 hover:text-green-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 md:p-8">

            <h2 className="mb-6 text-xl font-semibold">
              Send a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Please Enter Your Email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-green-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* Terminal */}
        <div className="mt-14 rounded-xl border border-gray-800 bg-black p-5 font-mono text-sm">
          <span className="text-green-400">
            akash@portfolio:~${" "}
          </span>

          <span className="text-gray-300">
            echo "Open to opportunities and collaborations."
          </span>
        </div>

      </div>
    </section>
  );
}