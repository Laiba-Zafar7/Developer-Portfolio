import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Evalica — Intelligent Paper Checker System",
    description:
      "Evalica is an intelligent AI-powered assessment platform built to simplify and modernize the evaluation of handwritten answer sheets. It combines OCR technology with advanced AI to digitize student responses, evaluate answers efficiently, generate meaningful feedback, and provide teachers with actionable insights into student performance.",
    image: "/images/project1.png",
    stack: ["Next.js", "Node.js", "Supabase", "Azure Vision API", "Gemini API"],
    liveUrl: "https://paper-checker-woad.vercel.app/",
  },
  {
    number: "02",
    title: "QuizCloud",
    description:
      "A modern quiz platform designed to provide an engaging and intuitive experience for creating, managing, and completing online quizzes.",
    image: "/images/project2.png",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://quiz-cloud-app-lxgl.vercel.app/",
  },
  {
    number: "03",
    title: "Inventory Management System",
    description:
      "A modern inventory management application designed to simplify product tracking, stock management, and business operations through a clean and responsive interface.",
    image: "/images/project3.png",
    stack: ["React", "Express", "MySQL"],
    repoUrl: "https://github.com/Laiba-Zafar7/inventory-dashboard",
  },
  {
    number: "04",
    title: "Aesthetic Clinic",
    description:
      "A modern, responsive website for an aesthetic and skin care clinic.",
    image: "/models/skin.png",
    stack: [],
    liveUrl: "https://aesthetic-clinic-black.vercel.app",
  },
  {
    number: "05",
    title: "Noctra Cars",
    description: "A sleek showcase website for premium cars.",
    image: "/cars.png",
    stack: [],
    liveUrl: "https://noctra-cars.vercel.app/",
  },
];

const CornerBrackets = () => (
  <>
    <span className="pointer-events-none absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />
    <span className="pointer-events-none absolute -top-px -right-px h-6 w-6 border-t-2 border-r-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />
    <span className="pointer-events-none absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />
    <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />
  </>
);

const ProjectImage = ({ project }) => (
  <a
    href={project.liveUrl || project.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block"
    aria-label={`View ${project.title} ${
      project.liveUrl ? "live project" : "code"
    }`}
  >
    <div className="relative overflow-hidden border border-white/10 bg-[#0E1219]">
      <div
        className="project-image-mask relative aspect-[16/9] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[#0B0E14]/0 group-hover:bg-[#0B0E14]/50 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-3 border border-[#FF5C28] bg-[#0B0E14]/80 backdrop-blur-sm text-[#EDEEF0] px-6 py-3 font-mono text-xs tracking-widest uppercase">
              {project.liveUrl ? "View Live Project" : "View Code"}
              <span className="text-[#FF5C28]">↗</span>
            </span>
          </div>
        </div>
      </div>
      <CornerBrackets />
    </div>
  </a>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      cards.forEach((card) => {
        const mask = card.querySelector(".project-image-mask");
        const brackets = card.querySelectorAll(".corner-bracket");
        const header = card.querySelector(".datasheet-header");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          })
          .fromTo(
            header,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          )
          .fromTo(
            card,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "<"
          )
          .fromTo(
            mask,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power4.out" },
            "-=0.6"
          )
          .to(brackets, { opacity: 1, duration: 0.4, stagger: 0.05 }, "-=0.4");
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full bg-[#0B0E14] text-[#EDEEF0] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10 pb-10">
          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#FF5C28] mb-4">
              {"/// Selected Work"}
            </p>
            <h2 className="font-[Space_Grotesk,sans-serif] text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
              Projects that
              <br />
              <span className="text-[#EDEEF0]/35">deliver impact.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[#888D98] text-base leading-relaxed">
              A selection of digital products, business websites, AI-powered
              applications, and full-stack solutions built to solve real-world
              problems.
            </p>
            <p className="mt-4 font-mono text-xs text-[#888D98]/70 tracking-wide">
              {String(projects.length).padStart(2, "0")} ENTRIES · SORTED BY
              RECENT
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isLive = Boolean(project.liveUrl);

            return (
              <article key={project.number} className="project-card group">
                <div className="datasheet-header flex items-center justify-between gap-4 mb-4 font-mono text-xs md:text-sm tracking-wide">
                  <div className="flex items-center gap-3 text-[#888D98]">
                    <span className="text-[#FF5C28]">
                      PROJECT — {project.number}
                    </span>
                    <span className="hidden sm:inline text-white/15">/</span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isLive
                            ? "bg-[#3DDC84] animate-pulse"
                            : "bg-[#FF5C28]"
                        }`}
                      />
                      {isLive ? "LIVE" : "PROJECT"}
                    </span>
                  </div>
                  <a
                    href={project.liveUrl || project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888D98] hover:text-[#FF5C28] transition-colors"
                  >
                    {isLive ? "[ VIEW SPEC ↗ ]" : "[ VIEW CODE ↗ ]"}
                  </a>
                </div>

                <h3 className="font-[Space_Grotesk,sans-serif] text-3xl md:text-5xl font-medium tracking-tight mb-7">
                  {project.title}
                </h3>

                <ProjectImage project={project} />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mt-9">
                  <p className="text-[#B7B9BF] text-base md:text-lg leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  {project.stack.length > 0 && (
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#888D98] mb-4">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-[#B7B9BF]"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#FF5C28]/70" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {index !== projects.length - 1 && (
                  <div className="mt-20 md:mt-32 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
