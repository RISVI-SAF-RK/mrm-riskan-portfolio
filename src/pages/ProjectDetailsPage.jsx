import { useParams, Link } from "react-router-dom"

import {
  ArrowLeft,
  Code2,
  ExternalLink,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Wrench,
} from "lucide-react"

import { projects } from "../data/projects"

function ProjectDetailsPage() {
  const { id } = useParams()

  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070b14] px-5 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-[#07101a] transition hover:bg-cyan-300"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const hasRealGithub =
    project.github &&
    !project.github.startsWith("YOUR_")

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* Top Navigation */}
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <span className="hidden text-sm text-slate-500 sm:block">
            Project Case Study
          </span>

        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.22em]">
              {project.category}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-4 text-base font-medium text-slate-300 sm:text-xl">
              {project.subtitle}
            </p>

            <p className="mt-7 max-w-3xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.longDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              {hasRealGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:w-auto"
                >
                  <Code2 size={18} />
                  GitHub Repository
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-[#061019] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

            </div>
          </div>

          {/* Main Image */}
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a101b] sm:mt-12 sm:rounded-[2rem]">

            <img
              src={project.image}
              alt={`${project.title} project`}
              className="aspect-[16/9] w-full object-cover sm:aspect-[16/8]"
            />

          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="border-t border-white/5 py-16 sm:py-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">

          {/* LEFT COLUMN */}
          <div className="space-y-6 sm:space-y-8">

            {/* Overview */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[2rem] sm:p-8">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Lightbulb size={22} />
                </div>

                <h2 className="text-xl font-semibold sm:text-2xl">
                  Project Overview
                </h2>

              </div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                {project.description}
              </p>

            </div>

            {/* Features */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[2rem] sm:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-400">
                  <Layers3 size={22} />
                </div>

                <h2 className="text-xl font-semibold sm:text-2xl">
                  Key Features
                </h2>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 rounded-xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:border-cyan-400/10"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-400"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {feature}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Development Experience */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[2rem] sm:p-8">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Wrench size={22} />
                </div>

                <h2 className="text-xl font-semibold sm:text-2xl">
                  Development Experience
                </h2>

              </div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Building this project gave me practical experience across
                application planning, user interface development, backend
                implementation, database integration, debugging, testing, and
                deployment. It also helped me understand how different parts of
                a software system work together to create a complete product.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                I focused on keeping the application modular, responsive, and
                maintainable while implementing real workflows rather than only
                basic CRUD functionality.
              </p>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">

            {/* Technology Stack */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 sm:rounded-[2rem]">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Technology Stack
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-[#090f1b] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}

              </div>
            </div>

            {/* Project Information */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 sm:rounded-[2rem]">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Project Information
              </p>

              <div className="mt-5 space-y-5 text-sm">

                <div>
                  <p className="text-slate-500">
                    Project Type
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Role
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Developer
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Focus
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Application Development
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/[0.04] p-6 sm:rounded-[2rem]">

              <p className="font-semibold text-white">
                Interested in my work?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                I&apos;m currently looking for internship opportunities in
                full-stack development, software engineering, and web
                development.
              </p>

              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }, 150)
                }}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#061019] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Contact Me
              </Link>

            </div>

          </aside>

        </div>
      </section>
    </main>
  )
}

export default ProjectDetailsPage