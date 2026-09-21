import { motion } from "framer-motion"
import { GraduationCap, CalendarDays } from "lucide-react"

function Education() {
  return (
    <section
      id="education"
      className="bg-[#070b14] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9"
        >

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <GraduationCap size={27} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Bachelor of Information and Communication Technology Honours
              </h3>

              <p className="mt-2 text-lg font-medium text-cyan-400">
                University of Colombo
              </p>

              <p className="mt-1 text-slate-400">
                Faculty of Technology
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={17} />
                Undergraduate
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                My degree provides a foundation across software development,
                programming, database systems, networking, information
                technology, system analysis, project management and other ICT
                disciplines.
              </p>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Education