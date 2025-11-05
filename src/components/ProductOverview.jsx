import React from 'react';
import { Briefcase, BarChart3, Users } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm">
    <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
      <Icon size={18} />
    </div>
    <div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-semibold text-slate-800">{value}</div>
    </div>
  </div>
);

const ProductOverview = () => {
  return (
    <section id="overview" className="mx-auto mt-16 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Product Concept: SmartOps — Business Operations Dashboard
          </h2>
          <p className="mt-3 text-slate-600">
            SmartOps helps growing businesses monitor KPIs, streamline workflows, and make data-driven decisions. This project demonstrates end-to-end delivery: discovery, design, development, testing, and deployment readiness.
          </p>
          <ul className="mt-6 space-y-2 text-slate-600">
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Real-time KPI tracking across sales, finance, and operations</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Role-based dashboards for executives, managers, and teams</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Alerts, goals, and automated status reports</li>
          </ul>
        </div>
        <div className="md:col-span-2 grid gap-3">
          <Stat icon={Briefcase} label="Use Cases" value="Operations, Sales, Finance" />
          <Stat icon={BarChart3} label="Core Metrics" value="Revenue, CAC, LTV, CSAT" />
          <Stat icon={Users} label="Target Users" value="SMBs to Mid-Market" />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
