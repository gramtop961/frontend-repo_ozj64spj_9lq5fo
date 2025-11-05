import React from 'react';
import { ClipboardCheck, Wrench, TestTube, Rocket } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, index }) => (
  <div className="relative rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
    <div className="mb-2 flex items-center gap-2">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <Icon size={16} />
      </div>
      <div className="text-xs font-medium text-slate-500">Step {index}</div>
    </div>
    <h4 className="text-base font-semibold text-slate-900">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
);

const ProcessQA = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Discovery & Requirements',
      desc: 'Stakeholder interviews, user stories, and measurable success criteria with a shared definition-of-done.',
    },
    {
      icon: Wrench,
      title: 'Design & Architecture',
      desc: 'Information architecture, wireframes, and component-driven UI with scalable backend endpoints.',
    },
    {
      icon: TestTube,
      title: 'Development, Testing & QA',
      desc: 'Unit and integration tests, CI checks, accessibility pass, and performance budget monitoring.',
    },
    {
      icon: Rocket,
      title: 'Release & Measurement',
      desc: 'Staged rollouts, analytics hooks, feedback loop, and a clear path for iteration.',
    },
  ];

  return (
    <section id="process" className="mx-auto mt-16 max-w-6xl px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Development Process & QA</h2>
        <p className="mt-1 text-slate-600">A transparent, quality-first approach that balances speed with rigor.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Step key={s.title} index={i + 1} {...s} />
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
        <strong className="font-semibold">Quality Assurance Plan: </strong>
        Automated tests on critical paths, manual exploratory sessions, WCAG AA accessibility checks, performance targets (LCP < 2.5s), and error monitoring with rollback strategy.
      </div>
    </section>
  );
};

export default ProcessQA;
