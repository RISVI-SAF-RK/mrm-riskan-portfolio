import { useEffect, useState } from "react"
import {
  Menu,
  X,
  Code2,
  BriefcaseBusiness,
} from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    {
      name: "Certifications",
      href: "#certifications",
      id: "certifications",
    },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = "home"

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= 160 && rect.bottom >= 160) {
            current = link.id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#070b14]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-[#070b14]/70 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          MRM Riskan
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id

            return (
              <a
                key={link.id}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* GitHub */}
          <a
            href="https://github.com/RISVI-SAF-RK"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="rounded-xl border border-white/10 p-2.5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <Code2 size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammed-risvi-mohamad-riskan-92b350378/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="rounded-xl border border-white/10 p-2.5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-300"
          >
            <BriefcaseBusiness size={18} />
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="ml-1 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#07101a] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="rounded-xl border border-white/10 p-2.5 text-white transition hover:border-cyan-400/30 lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] border-t border-white/5 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#070b14]/98 px-5 py-6 backdrop-blur-xl">

          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Mobile Social Links */}
          <div className="mx-auto mt-5 flex max-w-7xl items-center gap-3 border-t border-white/5 pt-5">

            {/* GitHub */}
            <a
              href="https://github.com/RISVI-SAF-RK"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <Code2 size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammed-risvi-mohamad-riskan-92b350378/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400/30 hover:text-blue-300"
            >
              <BriefcaseBusiness size={18} />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="ml-auto rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#07101a]"
            >
              Let&apos;s Talk
            </a>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar