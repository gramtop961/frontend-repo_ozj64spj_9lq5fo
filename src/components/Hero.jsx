import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[560px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6r0q0P3p3v8bO1rC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text legibility without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Rocket size={14} className="text-emerald-400" />
          <span className="text-white/90">Business Product Design & Development</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Presenting a Complete Product Lifecycle
        </h1>
        <p className="mt-3 max-w-2xl text-white/80">
          From idea to deployment, this mini project showcases a real-world product for the business industry, with planning, design, development, testing, and quality assurance.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Explore the Product <ArrowRight size={16} />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            See the Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
