import { motion } from "framer-motion"

import {
  ArrowRight,
  Download,
  MapPin,
  Code2,
  Database,
  Server,
  BriefcaseBusiness,
} from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[130px]" />

        <div className="absolute -right-32 bottom-20 h-[320px] w-[320px] rounded-full bg-violet-600/10 blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Hero Grid */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:py-24">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          {/* Availability */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-2 text-[11px] font-medium text-emerald-300 sm:mb-7 sm:px-4 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span>
              Available for Internship Opportunities
            </span>
          </div>

          {/* Role */}
          <p className="mt-5 text-lg font-medium text-slate-300 sm:text-xl">
  Full-Stack Developer
  <span className="mx-2 text-cyan-400">•</span>
  DevOps & Cloud Enthusiast
  <span className="mx-2 text-cyan-400">•</span>
  WordPress Developer
</p>

          {/* Main Heading */}
          <h1 className="text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
  Hi, I&apos;m{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    Risvi Riskan.
  </span>
</h1>

          {/* Secondary Heading */}
          <h2 className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-slate-200 sm:text-xl sm:leading-8 md:text-2xl">
            I build complete web applications from interface to database.
          </h2>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I&apos;m an Information and Communication Technology undergraduate
            at the Faculty of Technology, University of Colombo, focused on
            full-stack software development. I build responsive frontend
            experiences, backend APIs, database-driven systems, authentication
            workflows, and practical software solutions.
          </p>

          {/* Location */}
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin
              size={18}
              className="shrink-0 text-cyan-400"
            />

            Sri Lanka
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#07101a] shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 sm:w-auto"
            >
              View My Projects

              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/cv/Mohammed-Risvi-CV.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08] sm:w-auto"
            >
              <Download size={18} />

              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-10">

            {/* GitHub */}
            <a
              href="https://github.com/RISVI-SAF-RK"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              <Code2 size={20} />
              GitHub
            </a>

            <div className="hidden h-4 w-px bg-white/10 sm:block" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammed-risvi-mohamad-riskan-92b350378/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:text-blue-400"
            >
              <BriefcaseBusiness size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
          className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none"
        >

          {/* Profile Photo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="relative z-20 mb-6 flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Photo Glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-2xl" />

              {/* Gradient Border */}
              <div className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[3px]">
                <div className="rounded-full bg-[#070b14] p-[4px]">

                  <img
                    src="/images/profile.jpg"
                    alt="Risvi Riskan"
                    className="h-32 w-32 rounded-full object-cover object-top shadow-2xl sm:h-36 sm:w-36 lg:h-40 lg:w-40"
                  />

                </div>
              </div>

              {/* Availability Dot */}
              <div className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#070b14] bg-emerald-400">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>

            </div>
          </motion.div>

          {/* Card Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-3xl" />

          {/* Developer Card */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-7">

            {/* Window Header */}
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              </div>

              <span className="text-[10px] text-slate-500 sm:text-xs">
                developer.js
              </span>
            </div>

            {/* Code Area */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#080d17] p-4 font-mono text-[11px] leading-6 sm:rounded-2xl sm:p-6 sm:text-[13px] sm:leading-7 xl:p-7 xl:text-sm">

              <p className="whitespace-nowrap">
                <span className="text-violet-400">
                  const
                </span>{" "}

                <span className="text-cyan-300">
                  developer
                </span>{" "}

                <span className="text-white">
                  =
                </span>{" "}

                <span className="text-yellow-300">
                  {"{"}
                </span>
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  name
                </span>
                :{" "}

                <span className="text-emerald-300">
                  &quot;Risvi Riskan&quot;
                </span>
                ,
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  role
                </span>
                :{" "}

                <span className="text-emerald-300">
                  &quot;Full-Stack Developer&quot;
                </span>
                ,
              </p>
              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  focus
                </span>
                :{" "}

                <span className="text-emerald-300">
                  &quot;DevOps & Cloud&quot;
                </span>
                ,
                <span className="text-emerald-300">
                  &quot;WordPress Development&quot;
                </span>
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  education
                </span>
                :{" "}

                <span className="text-emerald-300">
                  &quot;BICT (Hons) Undergraduate&quot;
                </span>
                ,
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  frontend
                </span>
                : [

                <span className="text-emerald-300">
                  &quot;React&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;TypeScript&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;Tailwind&quot;
                </span>

                ],
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  backend
                </span>
                : [

                <span className="text-emerald-300">
                  &quot;Node.js&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;Express&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;PHP&quot;
                </span>

                ],
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  database
                </span>
                : [

                <span className="text-emerald-300">
                  &quot;PostgreSQL&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;MySQL&quot;
                </span>
                ,{" "}

                <span className="text-emerald-300">
                  &quot;Firebase&quot;
                </span>

                ],
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  university
                </span>
                :{" "}

                <span className="text-emerald-300">
                  &quot;University of Colombo&quot;
                </span>
                ,
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5">
                <span className="text-blue-300">
                  openToInternship
                </span>
                :{" "}

                <span className="text-orange-300">
                  true
                </span>
              </p>

              <p className="whitespace-nowrap">
                <span className="text-yellow-300">
                  {"}"}
                </span>
              </p>
            </div>

            {/* Mini Skill Cards */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-3">

              {/* Frontend */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03] sm:rounded-2xl">
                <Code2
                  className="mb-3 text-cyan-400"
                  size={22}
                />

                <p className="font-semibold text-white">
                  Frontend
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Responsive user interfaces
                </p>
              </div>

              {/* Backend */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-400/[0.03] sm:rounded-2xl">
                <Server
                  className="mb-3 text-blue-400"
                  size={22}
                />

                <p className="font-semibold text-white">
                  Backend
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  APIs and application logic
                </p>
              </div>

              {/* Database */}
              <div className="group rounded-xl border border-white/5 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.03] sm:rounded-2xl">
                <Database
                  className="mb-3 text-violet-400"
                  size={22}
                />

                <p className="font-semibold text-white">
                  Database
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Structured data systems
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

export default Hero