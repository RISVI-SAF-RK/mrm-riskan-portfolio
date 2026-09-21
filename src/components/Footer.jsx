import {
  Code2,
  BriefcaseBusiness,
  Mail,
  ArrowUp,
} from "lucide-react"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#050810]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Mohammedu Risvi Mohamad Riskan
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Full-Stack Developer and BICT (Hons) undergraduate at the
              Faculty of Technology, University of Colombo.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/RISVI-SAF-RK"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:text-blue-400"
            >
              <BriefcaseBusiness size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:mrmriskan26@gmail.com"
              aria-label="Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <Mail size={18} />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              title="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-[#07101a] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              <ArrowUp size={18} />
            </a>

          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-7 text-center text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {year} Mohammed Risvi Mohamad Riskan. All rights reserved.
          </p>

          <p>
            Built with React • Vite • Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer