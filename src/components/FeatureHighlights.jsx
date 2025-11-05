import React from 'react';
import { ShieldCheck, BellRing, LayoutDashboard, ChartPie } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Modular Dashboards',
    desc: 'Drag-and-drop widgets with saved layouts per role and team.',
  },
  {
    icon: ChartPie,
    title: 'Insight Engine',
    desc: 'Automatic trend detection and executive summaries for KPIs.',
  },
  {
    icon: BellRing,
    title: 'Smart Alerts',
    desc: 'Threshold-based notifications delivered to email and chat.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SSO, audit logs, and granular access controls out of the box.',
  },
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className="mb-3 inline-flex rounded-xl bg-slate-50 p-2 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600">
      <Icon size={18} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
);

const FeatureHighlights = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Key Features</h2>
          <p className="mt-1 text-slate-600">A focused, high-impact set of capabilities built for business decision-makers.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
