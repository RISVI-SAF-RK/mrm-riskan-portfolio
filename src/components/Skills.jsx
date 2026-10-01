import { motion } from "framer-motion"

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },

    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "Django",
        "REST APIs",
        "JWT Authentication",
        "RBAC",
        "API Validation",
      ],
    },

    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "Prisma ORM",
        "Firebase",
        "Cloud Firestore",
        "Supabase",
      ],
    },

    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "C++",
        "PHP",
        "Dart",
        "SQL",
      ],
    },

    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "Dockerfile",
        "Docker Containers",
        "Docker Images",
        "Docker Networking",
        "Docker Compose",
        "Docker CLI",
        "Environment Variables",
        "Git",
        "GitHub",
        "GitHub Flow",
        "CI/CD Fundamentals",
        "AWS",
        "Azure DevOps",
        "Railway",
      ],
    },

    {
      title: "WordPress Development",
      skills: [
        "WordPress",
        "Content Management Systems",
        "Responsive Web Design",
        "UI/UX Design",
        "Website Deployment",
        "Content Management",
      ],
    },

    {
      title: "Security & API",
      skills: [
        "JWT",
        "Authentication",
        "Authorization",
        "RBAC",
        "API Testing",
        "Postman",
        "Cybersecurity Fundamentals",
        "Secure Coding",
      ],
    },

    {
      title: "Software Engineering",
      skills: [
        "SDLC",
        "UML",
        "Database Design",
        "REST Architecture",
        "CRUD Applications",
        "Software Testing",
        "Project Management",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-[#090e18] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Technologies & tools I work with.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            My technical experience covers full-stack development,
            modern frontend frameworks, backend development,
            containerization, DevOps and cloud technologies,
            WordPress development, databases, API development,
            security, and software engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#070b14] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills