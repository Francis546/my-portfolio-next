import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-neutral-800 selection:text-white font-sans">
      
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0d0d]/80 border-b border-neutral-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center text-sm font-semibold tracking-wider">
            FN
          </div>

          {/* Nav Links Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/90 border border-neutral-800 rounded-full px-4 py-1.5 text-xs text-neutral-400">
            <a href="#home" className="hover:text-white transition px-3 py-1">Home</a>
            <a href="#services" className="hover:text-white transition px-3 py-1">Services</a>
            <a href="#about" className="hover:text-white transition px-3 py-1">About</a>
            <a href="#skills" className="hover:text-white transition px-3 py-1">Skills</a>
            <a href="#projects" className="hover:text-white transition px-3 py-1">Projects</a>
          </nav>

          {/* Action Button */}
          <a
            href="mailto:contact@example.com"
            className="bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 px-4 py-2 rounded-lg border border-neutral-700 transition"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 py-16">

        {/* --- HERO SECTION --- */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-neutral-400 text-sm font-light">I am Francis</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-neutral-100">
              Software &amp; Computer <br />
              <span className="text-neutral-300">Engineer</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              Building high-performance web applications, scalable system logic, and seamless digital experiences with modern full-stack architectures.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs px-5 py-2.5 rounded-lg border border-neutral-700 transition"
              >
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 text-neutral-400 text-lg">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Francis546" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Francis"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Services</h2>
            <p className="text-xs text-neutral-400">Designing clean scalable responsive web applications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-neutral-200">Full-Stack Development</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Clean, robust frontend interfaces paired with efficient backend API logic and databases.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Next.js / React
                </div>
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  REST &amp; Database Architecture
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-neutral-200">System Architecture &amp; Logic</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Optimized data parsing, algorithm design, and scalable backend workflows using Python and TypeScript.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Python Automation
                </div>
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Clean Code Design
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-neutral-200">Performance &amp; Optimization</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Fast, mobile-first web platforms built for speed, SEO excellence, and cross-platform reliability.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Asset Optimization
                </div>
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  SEO &amp; Lighthouse Metrics
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-neutral-200">UI/UX Implementation</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Translating design system mockups into pixel-perfect, responsive component libraries with Tailwind CSS.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Responsive Design
                </div>
                <div className="bg-neutral-800/50 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 px-3 py-1.5 text-center">
                  Component Hierarchy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">About Me</h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              I'm a Computer Engineering student and developer focused on engineering reliable systems and responsive user interfaces. I turn complex logic into clean, intuitive web applications built for speed and longevity.
            </p>
          </div>

          {/* Approach Pills */}
          <div className="space-y-3 max-w-4xl mx-auto">
            <h3 className="text-center text-xs font-semibold text-neutral-300 tracking-wider">My Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[11px] font-medium text-neutral-300">01</span>
                <span className="text-xs text-neutral-300 font-medium">Understand technical requirements</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[11px] font-medium text-neutral-300">02</span>
                <span className="text-xs text-neutral-300 font-medium">Architect clean component logic</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[11px] font-medium text-neutral-300">03</span>
                <span className="text-xs text-neutral-300 font-medium">Ship fast, accessible software</span>
              </div>
            </div>
          </div>

          {/* Stats Counter */}
          <div className="flex justify-center items-center gap-12 sm:gap-20 pt-4">
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-100">02+</div>
              <div className="text-[11px] text-neutral-500">Years Active</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-100">15+</div>
              <div className="text-[11px] text-neutral-500">Projects Built</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-100">05+</div>
              <div className="text-[11px] text-neutral-500">Clients Served</div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Skills</h2>
            <p className="text-xs text-neutral-400">Crafting seamless full-stack architecture and clean code</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skill Group 1 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-200">Core Engineering</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Full-Stack Dev</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">UI/UX Layouts</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Responsive Design</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Component Architecture</span>
              </div>
            </div>

            {/* Skill Group 2 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-200">Languages &amp; Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Next.js</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">React</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">TypeScript</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Python</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Tailwind CSS</span>
              </div>
            </div>

            {/* Skill Group 3 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-200">Tools &amp; Workflow</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Git / GitHub</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">VS Code</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Vercel</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Figma</span>
              </div>
            </div>

            {/* Skill Group 4 */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-200">Interactions &amp; Logic</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">REST APIs</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">State Management</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Regex &amp; Data Parsing</span>
                <span className="bg-neutral-800/60 border border-neutral-800 rounded-full px-3 py-1 text-[11px] text-neutral-400">Performance Audits</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Francis. Built with Next.js &amp; Tailwind CSS.</p>
      </footer>
    </div>
  );
}