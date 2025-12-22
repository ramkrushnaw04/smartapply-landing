import React from 'react';
import { Rocket, Briefcase } from "lucide-react";
import { MapPin, Clock } from "lucide-react";

/* --- Cards (no per-card scaling) --- */

const JobCard: React.FC = () => (
  <div className="bg-white text-gray-900 rounded-3xl absolute top-[calc(50%-210px)] right-[calc(50%-165px)] -translate-x-20 w-[330px] h-[420px] shadow-xl p-6 border border-gray-200 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Company Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base">TechNova</h3>
            <p className="text-gray-500 text-sm">Technology • 120+ employees</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
          Actively hiring
        </span>
      </div>

      <h2 className="text-xl font-bold mt-2">Frontend Developer</h2>

      <div className="flex items-center text-gray-500 text-sm gap-3 mt-2">
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span>Pune, India</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={14} />
          <span>Full-time</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>2d ago</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        We're looking for a passionate React developer to craft stunning user experiences
        and contribute to our next-gen web platform using Tailwind and modern UI tools.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">React</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">Tailwind</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">Next.js</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">UI/UX</span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div>
        <p className="text-gray-500 text-sm">Salary</p>
        <p className="font-semibold text-lg">₹6–10 LPA</p>
      </div>
      <button className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition">
        Apply Now
      </button>
    </div>
  </div>
);

const AiChatbotPanel: React.FC = () => {
  return (
    <div className="bg-gray-100/10 shadow-[0_0_10px_rgba(0,0,0,0.25)] backdrop-blur-universal border border-gray-300/20 rounded-3xl absolute top-[calc(50%-110px)] right-[calc(50%-110px)] translate-x-24 -translate-y-48 w-[220px] h-[220px] z-10">
      <div className="flex h-full w-full flex-col items-start justify-between p-4">
        <div>
          <span className="inline-flex items-center rounded-full bg-gray-900/80 px-2.5 py-1 text-[10px] font-medium text-white">
            AI Chatbot
          </span>
          <h3 className="mt-3 text-sm font-semibold text-gray-900">Smart, fast replies</h3>
          <p className="mt-1 text-[11px] leading-4 text-gray-100">
            Ask anything about jobs, companies, or salaries and get instant guidance.
          </p>
        </div>

        <div className="w-full">
          <div className="mb-1 max-w-[85%] rounded-2xl bg-white/70 px-3 py-1.5 text-[11px] text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            "Find UI roles in Jakarta"
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl bg-gray-900/90 px-3 py-1.5 text-[11px] text-white shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            12 matching jobs found
          </div>
        </div>
      </div>
    </div>
  );
};

const LatexResumePanel: React.FC = () => {
  return (
    <div className="bg-gray-100/10 shadow-[0_0_10px_rgba(0,0,0,0.25)] backdrop-blur-universal border border-gray-300/20 rounded-3xl absolute top-[calc(50%-125px)] right-[calc(50%-160px)] translate-x-20 translate-y-48 w-[320px] h-[250px] z-10 max-w-[90vw]">
      <div className="flex h-full w-full flex-col justify-between p-4 overflow-hidden">
        <div className="shrink-0">
          <span className="inline-flex items-center rounded-full bg-gray-900/85 px-2.5 py-1 text-[10px] font-medium text-white">
            LaTeX Resume Editor
          </span>
          <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-gray-100">
            Write concise LaTeX and see formatted resume updates instantly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 overflow-hidden">
          <div className="rounded-xl bg-white/70 p-2 text-[11px] text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            <div className="mb-1 text-[10px] font-medium uppercase tracking-wide text-gray-500">
              LaTeX
            </div>
            <pre className="max-h-20 overflow-hidden whitespace-pre-wrap break-words leading-4 pr-1">
              {"\\section{Experience}\\textbf{UI Designer} — Minerva Co."}
            </pre>
          </div>

          <div className="rounded-xl bg-gray-900/90 p-2 text-[11px] text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)]">
            <div className="mb-1 text-[10px] font-medium uppercase tracking-wide text-white/70">
              Preview
            </div>
            <div className="space-y-1 overflow-hidden">
              <div className="h-2.5 w-24 rounded bg-white/70" />
              <div className="h-1.5 w-40 rounded bg-white/40" />
              <div className="h-1.5 w-28 rounded bg-white/30" />
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between shrink-0">
          <button className="rounded-full bg-gray-900 px-3 py-1.5 text-[11px] text-white shadow-[0_6px_16px_rgba(17,24,39,0.18)]">
            Export PDF
          </button>
          <span className="text-[10px] text-gray-500">Ctrl+S to save</span>
        </div>
      </div>
    </div>
  );
};

/* --- Hero: cards grouped + container height adjusted to avoid overflow --- */

const Hero: React.FC = () => {
  return (
    <section
      className="content min-h-[700px] xs:min-h-[750px] sm:min-h-[800px] md:min-h-[850px] lg:min-h-[800px] xl:min-h-[800px] m-2 mt-[75px] py-12 md:py-16 lg:py-20 rounded-3xl flex items-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 65% at 20% 30%, rgba(190,136,255,0.09), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.18), transparent 90%), #18181b",
      }}
      data-bg="dark"
    >
      <div className="m-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mdd:flex-row-reverse items-center lg:items-stretch justify-between gap-8 lg:gap-10">
          {/* Right column with cluster scaling and responsive height */}
          <div className="right w-full flex justify-center items-center lg:w-1/2">
            <div
              className={[
                // Relative box that contains all absolute cards
                // Height tuned to include top-most (-top-36) and bottom-most (-bottom-52) edges.
                // Use min-h so content never overflows; scale at breakpoints to match cluster scaling.
                "relative",
                "origin-center",
                // Base dimensions and height progression
                "min-h-[370px]",     // tiny screens
                "xs:min-h-[460px]",  // 480
                "sm:min-h-[580px]",  // 640
                "md:min-h-[640px]",  // 768 (tablet)
                "lg:min-h-[580px]",  // 1024 (tighter on desktop as scale is near 1)
                "xl:min-h-[560px]",  // 1280
                // Group scaling for all 3 cards together
                "scale-[0.58] xs:scale-[0.68] sm:scale-[0.80] md:scale-[0.90] lg:scale-[0.96] xl:scale-100 2xl:scale-[1.03]",
                // Prevent visual clipping while scaling
                "overflow-visible",
              ].join(" ")}
            >
              {/* <DistortedCircularGradient /> */}
              <AiChatbotPanel />
              <JobCard />
              <LatexResumePanel />
            </div>
          </div>

          {/* Left text content */}
          <div className="left w-full lg:w-1/2 text-white rounded-l-3xl pl-0 lg:pl-10">
            <h1 className="font-bold text-[28px] sm:text-4xl lg:text-7xl leading-[1.15] lg:leading-tight tracking-tight">
              Modernizing job <br className="hidden sm:block" />
              <span className="bg-gradient-to-r font-extrabold from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                search with smarter tools
              </span>{" "}
              and design
            </h1>

            <p className="font-semibold sm:font-bold mt-4 sm:mt-6 lg:mt-12 text-gray-400 text-sm sm:text-base">
              Reimagining how candidates find opportunities with seamless design, AI-driven insights, and a modern, intuitive job application experience.
            </p>

            <div className="mt-6 lg:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <button className="text-gray-900 font-bold px-5 sm:px-8 py-3 sm:py-4 bg-white rounded-full">
                Get Started Now!
              </button>
              <button className="bg-transparent border border-gray-600 font-bold px-5 sm:px-8 py-3 sm:py-4 text-white rounded-full">
                Watch Totorial
              </button>
            </div>

            <div className="flex justify-start gap-4 sm:gap-5 mt-6 lg:mt-10 items-center text-sm sm:text-base">
              <span className='font-thin'>Some Action</span>
              <span className="w-5 h-5 text-white flex justify-center items-center">
                <Rocket strokeWidth={0.5} />
              </span>
              <span className="w-5 h-5 text-white flex justify-center items-center">
                <Briefcase strokeWidth={0.5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
