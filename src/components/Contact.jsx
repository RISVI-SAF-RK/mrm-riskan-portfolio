import { useState } from "react"
import { motion } from "framer-motion"

import {
  Mail,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSending(true)
    setSubmitted(false)
    setError("")

    try {
      const data = new FormData()

      data.append(
        "access_key",
        "12ac74dd-6a86-4991-8396-cc00aba86584"
      )

      data.append("name", formData.name)
      data.append("email", formData.email)

      data.append(
        "subject",
        formData.subject || "Portfolio Contact Message"
      )

      data.append("message", formData.message)

      data.append(
        "from_name",
        "MRM Riskan Portfolio"
      )

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      )

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setError(
          "Message could not be sent. Please try again."
        )
      }
    } catch (err) {
      console.error("Contact form error:", err)

      setError(
        "Something went wrong. Please try again later."
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070b14] py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m currently looking for internship opportunities in
            full-stack development, software engineering, and web development.
            If you&apos;d like to discuss an opportunity, project, or
            collaboration, feel free to contact me.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              You can reach me through email, phone, WhatsApp, LinkedIn,
              or the contact form. I&apos;m open to internship opportunities,
              software development discussions, and collaborations.
            </p>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:mrmriskan26@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-white transition group-hover:text-cyan-300">
                    mrmriskan26@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+94741596266"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/20 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-white transition group-hover:text-emerald-300">
                    +94 74 159 6266
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94741596266?text=Hello%20Risvi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-green-400/20 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-white transition group-hover:text-green-300">
                    Chat on WhatsApp
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohammed-risvi-mohamad-riskan-92b350378/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/20 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                  <BriefcaseBusiness size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-white transition group-hover:text-blue-300">
                    Mohammed Risvi Mohamad Riskan
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/RISVI-SAF-RK"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    RISVI-SAF-RK
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#090f1b] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-7 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <p className="font-semibold text-emerald-300">
                  Open to Internship Opportunities
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Full-Stack Development • Software Engineering • Web Development
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-7">
              <h3 className="text-2xl font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the form below and your message will be sent directly
                to my email inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-white/10 bg-[#090f1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#090f1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity"
                  className="w-full rounded-xl border border-white/10 bg-[#090f1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#090f1b] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-[#061019] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* Success */}
              {submitted && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] px-4 py-3 text-sm text-emerald-400">
                  <CheckCircle2 size={17} />

                  Message sent successfully. Thank you for getting in touch!
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-4 py-3 text-sm text-red-400">
                  <AlertCircle size={17} />

                  {error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact