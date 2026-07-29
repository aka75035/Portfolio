import { useEffect, useRef, useState } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";

import useTypeWriter from "../hooks/useTypeWriter";
import { certificatesData } from "../utils/certificates";


export default function Certificates() {
  const { lines, typeLine } = useTypeWriter();

  const [finished, setFinished] = useState(false);

  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;

    started.current = true;

    let timer;

    async function run() {
      await typeLine(
        "Certificates, achievements and continuous learning."
      );

      timer = setTimeout(() => {
        setFinished(true);
      }, 400);
    }

    run();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">

      <div className="mx-auto max-w-5xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-12">

          <p className="mb-3 font-mono text-sm text-green-400">
            ~/certificates
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Certificates
          </h1>

          <div className="mt-4 min-h-[28px] max-w-2xl font-mono text-gray-400">

            {lines.map((line, index) => (
              <p key={index}>
                <span className="text-green-400">
                  $&nbsp;
                </span>

                {line}

                {!finished &&
                  index === lines.length - 1 && (
                    <span className="ml-1 animate-pulse text-green-400">
                      _
                    </span>
                  )}
              </p>
            ))}

          </div>

        </div>


        {/* =====================================
            CERTIFICATES
        ===================================== */}

        {finished && (

          <div className="grid gap-5 md:grid-cols-2">

            {certificatesData.map((certificate, index) => (

              <article
                key={index}
                className="
                  group
                  flex
                  flex-col
                  rounded-xl
                  border
                  border-gray-800
                  bg-gray-900
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-500
                "
              >

                {/* Top */}

                <div className="flex items-start justify-between gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-gray-800
                      bg-gray-950
                      text-green-400
                    "
                  >
                    <Award size={21} />
                  </div>

                  <span className="font-mono text-xs text-gray-500">
                    #{String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Title */}

                <div className="mt-6">

                  <h2 className="text-xl font-semibold text-white transition group-hover:text-green-400">
                    {certificate.title}
                  </h2>

                  <div className="mt-4 space-y-2">

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Building2
                        size={15}
                        className="text-green-400"
                      />

                      {certificate.issuer}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar
                        size={15}
                        className="text-green-400"
                      />

                      {certificate.date}
                    </div>

                  </div>

                </div>


                {/* Description */}

                <p className="mt-5 flex-1 text-sm leading-6 text-gray-400">
                  {certificate.description}
                </p>


                {/* Button */}

                <div className="mt-6 border-t border-gray-800 pt-5">

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-sm
                      text-green-400
                      transition
                      hover:text-green-300
                    "
                  >
                    View Certificate

                    <ExternalLink size={15} />

                  </a>

                </div>

              </article>

            ))}

          </div>

        )}


        {/* =====================================
            TERMINAL FOOTER
        ===================================== */}

        {finished && (

          <div className="mt-14 rounded-xl border border-gray-800 bg-black p-5 font-mono text-sm">

            <span className="text-green-400">
              akash@portfolio:~${" "}
            </span>

            <span className="text-gray-300">
              ls ./certificates
            </span>

            <p className="mt-3 text-gray-500">
              {certificatesData.length} credentials found.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}