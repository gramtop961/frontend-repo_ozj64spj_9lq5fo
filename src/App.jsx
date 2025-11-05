import React from 'react';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import FeatureHighlights from './components/FeatureHighlights';
import ProcessQA from './components/ProcessQA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500" />
            <span className="text-sm font-semibold tracking-tight text-slate-800">SmartOps</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#overview" className="hover:text-slate-900">Overview</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800">Get the Report</a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <ProductOverview />
        <FeatureHighlights />
        <ProcessQA />

        <section id="contact" className="mx-auto mt-16 mb-20 max-w-3xl rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Deliverables</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Problem statement, user personas, and success metrics</li>
            <li>Wireframes, UI mockups, and interaction guidelines</li>
            <li>Working prototype with core features demonstrated</li>
            <li>Testing & QA report with performance and accessibility results</li>
          </ul>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400" href="#">Download Summary</a>
            <span className="text-xs text-slate-500">Timeline: 2 weeks (Design 5d, Build 5d, QA 2d)</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-6 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 text-xs text-slate-500">
          © {new Date().getFullYear()} SmartOps — Mini Project: Product Design & Development
        </div>
      </footer>
    </div>
  );
}

export default App;
