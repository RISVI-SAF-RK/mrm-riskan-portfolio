import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Server,
  GraduationCap,
  BriefcaseBusiness,
  Cloud,
  ShieldCheck,
  MapPin,
} from "lucide-react"

function About() {
  const focusAreas = [
    {
      icon: <Code2 size={23} />,
      title: "Frontend Engineering",
      description:
        "Building responsive, accessible and modern interfaces using React, TypeScript, JavaScript, Tailwind CSS and Flutter.",
    },
    {
      icon: <Server size={23} />,
      title: "Backend Development",
      description:
        "Developing REST APIs, authentication systems, application workflows and server-side business logic.",
    },
    {
      icon: <Database size={23} />,
      title: "Database Development",
      description:
        "Working with PostgreSQL, MySQL, Prisma ORM, Firebase and Supabase to build data-driven applications.",
    },
    {
      icon: <Cloud size={23} />,
      title: "Cloud & DevOps",
      description:
        "Exploring cloud architecture, deployment and DevOps practices using AWS, Azure DevOps, Railway and Firebase.",
    },
    {
      icon: <ShieldCheck size={23} />,
      title: "Application Security",
      description:
        "Applying authentication, authorization, JWT, RBAC, secure validation and cybersecurity fundamentals.",
    },
    {
      icon: <BriefcaseBusiness size={23} />,
      title: "Software Project Development",
      description:
        "Combining software engineering, project management, SDLC and problem-solving to deliver complete applications.",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070b14] py-24 sm:py-28"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turning ideas into complete digital products.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Mohammed Risvi Mohamad Riskan, an undergraduate following
            the Bachelor of Information and Communication Technology Honours
            degree at the Faculty of Technology, University of Colombo.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
            My main interest is full-stack software development. I enjoy
            working across frontend interfaces, backend APIs, databases,
            authentication, cloud services and deployment to create complete
            applications that solve practical problems.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
            Alongside software development, I&apos;m continuously developing my
            knowledge in cloud computing, DevOps, cybersecurity, API testing,
            mobile application development and software project management.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                {area.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-400">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="font-semibold text-white">
                  ICT Undergraduate
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Faculty of Technology
                  <br />
                  University of Colombo
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <BriefcaseBusiness size={22} />
              </div>

              <div>
                <p className="font-semibold text-white">
                  Open to Internship Opportunities
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Full-Stack Development • Software Engineering • Web Development
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={18} className="text-cyan-400" />
          Sri Lanka
        </div>

      </div>
    </section>
  )
}

export default About