import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 md:px-16 lg:px-24 py-6">
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-[#18181b] border border-zinc-800 flex items-center justify-center font-semibold text-sm">
          fn
        </div>

        {/* Floating Nav Pills */}
        <div className="hidden md:flex items-center gap-1 bg-[#121214] border border-zinc-800/80 rounded-full px-4 py-1.5 text-xs text-zinc-400">
          <Link href="#home" className="hover:text-white transition px-3 py-1">Home</Link>
          <Link href="#services" className="hover:text-white transition px-3 py-1">Services</Link>
          <Link href="#about" className="bg-zinc-800 text-white rounded-full px-3 py-1">About</Link>
          <Link href="#skills" className="hover:text-white transition px-3 py-1">Skills</Link>
          <Link href="#projects" className="hover:text-white transition px-3 py-1">Projects</Link>
        </div>

        {/* CTA */}
        <Link href="#contact" className="bg-[#18181b] hover:bg-zinc-800 border border-zinc-700/60 text-xs font-medium px-4 py-2 rounded-full transition">
          Let&apos;s Talk
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="max-w-6xl mx-auto my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-zinc-400 text-sm font-medium">I am Francis</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Software & Computer <br />
            Engineer
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed">
            Building high-performance web applications, scalable system logic, and seamless digital experiences with modern full-stack architectures.
          </p>
          
          <div className="pt-2">
            <a href="/resume.pdf" target="_blank" className="bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 px-5 py-2.5 rounded-xl transition border border-zinc-700/50 inline-block font-medium">
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2 text-zinc-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition text-lg">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Francis546" target="_blank" rel="noreferrer" className="hover:text-white transition text-lg">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-zinc-800 bg-[#0a0a0c]">
            <Image 
            src="/profile.jpg"
            alt="Francis"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500"
            priority
          />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="max-w-6xl mx-auto my-24">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <p className="text-zinc-500 text-xs md:text-sm">Designing clean, scalable, and responsive web applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Full-Stack Development",
              desc: "Building robust end-to-end applications using modern frameworks like Next.js, React, and Python.",
              tags: ["Next.js App Router", "REST & GraphQL APIs"]
            },
            {
              title: "UI/UX & Frontend",
              desc: "Crafting pixel-perfect, interactive, and responsive user interfaces optimized for speed.",
              tags: ["Tailwind CSS", "Smooth Interactions"]
            },
            {
              title: "Performance & Optimization",
              desc: "Lightning-fast page load speeds, SEO optimization, and clean modular code architecture.",
              tags: ["Speed Optimization", "Clean Code Structure"]
            },
            {
              title: "Systems & Logic Design",
              desc: "Implementing data structures, algorithms, and modular workflows for enterprise tools.",
              tags: ["Custom Business Logic", "Database Design"]
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition">
              <div>
                <h3 className="font-semibold text-base mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">{service.desc}</p>
              </div>
              <div className="space-y-2">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="block text-center bg-[#1a1a1e] border border-zinc-800 text-zinc-300 text-[11px] py-1.5 px-3 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="max-w-4xl mx-auto my-24 text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
          I am a computer engineering student and developer passionate about creating clean, scalable digital experiences. 
          I focus on turning complex technical challenges into intuitive user interfaces, efficient database architectures, and dependable software solutions.
        </p>

        {/* My Approach Pills */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">My Approach</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { num: "01", text: "Understand Users & Goals" },
              { num: "02", text: "Architect Clean Solutions" },
              { num: "03", text: "Deliver High-Performance Code" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#121214] border border-zinc-800/80 rounded-xl p-3 flex items-center gap-3">
                <span className="bg-zinc-800 text-white text-xs font-semibold px-2 py-1 rounded-md">{item.num}</span>
                <span className="text-xs text-zinc-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 max-w-xl mx-auto border-t border-zinc-900">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">02+</h3>
            <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">15+</h3>
            <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-1">Projects Built</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">100%</h3>
            <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-1">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="max-w-6xl mx-auto my-24">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <p className="text-zinc-500 text-xs md:text-sm">Crafting seamless UI/UX and clean backend code</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              category: "Core Skills",
              skills: ["Full-Stack Dev", "UI/UX Layouts", "Responsive Design", "Component Architecture"]
            },
            {
              category: "Languages & Frameworks",
              skills: ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS"]
            },
            {
             category: "Tools & Workflow",
              skills: ["Git / GitHub", "VS Code", "Vercel", "Figma"]
            },
            {
              category: "Interactions & Logic",
              skills: ["REST APIs", "State Management", "Regex & Data Parsing", "Performance Audits"]
            }
          ].map((col, idx) => (
            <div key={idx} className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6">
              <h3 className="font-semibold text-sm mb-4 text-zinc-300">{col.category}</h3>
              <div className="flex flex-wrap gap-2">
                {col.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-[#1a1a1e] border border-zinc-800 text-zinc-300 text-[11px] px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}