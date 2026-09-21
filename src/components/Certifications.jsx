import { useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

import { certifications } from "../data/certifications"

function Certifications() {
  const [showAll, setShowAll] = useState(false)

  const featured = certifications.filter(
    (certificate) => certificate.featured
  )

  const others = certifications.filter(
    (certificate) => !certificate.featured
  )

  return (
    <section
      id="certifications"
      className="border-y border-white/5 bg-[#090e18] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
            Certifications
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Continuous learning beyond the classroom.
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
            Certifications and training that support my development in cloud
            computing, DevOps, APIs, cybersecurity, Linux, programming, and
            mobile application development.
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {featured.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-1.5 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-950/10 sm:rounded-[1.7rem]"
            >
              {/* Certificate Image */}
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/5 bg-[#070b14] p-4 sm:p-5">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Certificate Content */}
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Award size={20} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] font-medium text-slate-400 sm:text-[11px]">
                    {certificate.category}
                  </span>

                </div>

                <h3 className="text-base font-semibold leading-7 text-white sm:text-lg">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {certificate.issuer}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More Certifications */}
        {showAll && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {others.map((certificate) => (
              <div
                key={certificate.title}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.03] sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-400">
                  <Award size={20} />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold leading-6 text-white">
                    {certificate.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {certificate.issuer}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {certificate.category}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Show More Button */}
        {others.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:w-auto"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View All Certifications
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Certifications