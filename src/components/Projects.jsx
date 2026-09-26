import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Star,
} from "lucide-react"

import projects from "../data/projects"

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = [
    "All",
    "Full-Stack",
    "DevOps",
    "WordPress",
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") {
      return true
    }

    if (activeFilter === "Full-Stack") {
      return project.category
        ?.toLowerCase()
        .includes("full-stack")
    }

    if (activeFilter === "DevOps") {
      return project.category
        ?.toLowerCase()
        .includes("devops")
    }

    if (activeFilter === "WordPress") {
      return project.category
        ?.toLowerCase()
        .includes("wordpress")
    }

    return true
  })

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            A collection of my full-stack applications, DevOps and
            containerization projects, and WordPress development work.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                    : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {filteredProjects.map((project, index) => {
            const hasRealGithub =
              project.github &&
              !project.github.startsWith("YOUR_")

            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/5 sm:rounded-[2rem]"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#090f1b]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#07111d]/90 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur">
                      <Star size={14} />
                      Featured Project
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">

                  {/* Category */}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </p>

                  {/* Title */}
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={22}
                      className="mt-1 shrink-0 text-cyan-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Subtitle */}
                  <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies
                      ?.slice(0, 6)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-[#070b14] px-3 py-1.5 text-xs font-medium text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                    {/* View Project */}
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-[#061019] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
                    >
                      View Project
                      <ArrowUpRight size={17} />
                    </Link>

                    {/* GitHub */}
                    {hasRealGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:w-auto"
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:w-auto"
                      >
                        Live Demo
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">
            <p className="text-slate-400">
              No projects available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects