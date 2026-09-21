import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Star,
} from "lucide-react"

import { projects } from "../data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Projects that demonstrate how I build.
          </h2>

          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A selection of full-stack, mobile, and web development projects
            where I applied frontend development, backend engineering,
            databases, authentication, APIs, cloud services, and responsive
            design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => {
            const hasRealGithub =
              project.github &&
              !project.github.startsWith("YOUR_")

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className={`group relative overflow-hidden rounded-[1.5rem] border bg-white/[0.025] shadow-xl shadow-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/10 sm:rounded-[2rem] ${
                  project.featured
                    ? "border-cyan-400/20"
                    : "border-white/10 hover:border-cyan-400/20"
                }`}
              >
                {/* Premium Hover Glow */}
                <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

                  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-500/[0.035] blur-3xl" />
                </div>

                {/* Project Image */}
                <div className="relative z-10 overflow-hidden border-b border-white/10 bg-[#0b111d]">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-[#070b14]/90 px-2.5 py-1.5 text-[10px] font-semibold text-cyan-300 shadow-lg backdrop-blur-xl sm:left-5 sm:top-5 sm:gap-2 sm:px-3 sm:text-xs">
                      <Star size={12} />
                      Featured Project
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b14]/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                {/* Project Content */}
                <div className="relative z-10 p-5 sm:p-7">

                  {/* Category */}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-xs sm:tracking-[0.18em]">
                    {project.category}
                  </p>

                  {/* Title */}
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                        {project.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="mt-1 shrink-0 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-white">
                      Key Highlights
                    </p>

                    <ul className="space-y-2.5">
                      {project.features
                        .slice(0, 4)
                        .map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                            <span>
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies
                      .slice(0, 7)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-[#090f1b] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition duration-300 hover:border-cyan-400/25 hover:text-cyan-300 sm:text-xs"
                        >
                          {technology}
                        </span>
                      ))}

                    {project.technologies.length > 7 && (
                      <span className="rounded-lg border border-white/10 bg-white/[0.015] px-2.5 py-1.5 text-[11px] text-slate-500 sm:text-xs">
                        +{project.technologies.length - 7}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                    {/* GitHub */}
                    {hasRealGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:w-auto"
                      >
                        <Code2 size={17} />
                        GitHub
                      </a>
                    )}

                    {/* Live Demo */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#061019] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
                      >
                        <ExternalLink size={17} />
                        Live Demo
                      </a>
                    )}

                    {/* Case Study */}
                    <Link
                      to={`/projects/${project.id}`}
                      className="group/case inline-flex w-full items-center justify-center gap-2 rounded-xl border border-transparent px-4 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:border-cyan-400/10 hover:bg-cyan-400/5 sm:w-auto"
                    >
                      View Case Study

                      <ArrowUpRight
                        size={16}
                        className="transition duration-300 group-hover/case:-translate-y-0.5 group-hover/case:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects