import React from 'react';
import { Brain, ChartLine, Image as ImageIcon, Database } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Prediction',
    icon: <Brain className="h-5 w-5" />,
    tags: ['XGBoost', 'Feature Engineering', 'SHAP'],
    description:
      'Built a predictive model to identify at-risk customers, improving retention by 12%. Includes feature store and explainability dashboards.',
    link: '#',
  },
  {
    title: 'Sales Forecasting',
    icon: <ChartLine className="h-5 w-5" />,
    tags: ['Time Series', 'Prophet', 'Python'],
    description:
      'End-to-end forecasting pipeline with cross-validation and holiday effects. Deployed as an API with automated reporting.',
    link: '#',
  },
  {
    title: 'Image Quality Classifier',
    icon: <ImageIcon className="h-5 w-5" />,
    tags: ['CNN', 'PyTorch', 'CV'],
    description:
      'Computer vision model to score image quality for marketplace listings, reducing moderation workload by 30%.',
    link: '#',
  },
  {
    title: 'Analytics Data Mart',
    icon: <Database className="h-5 w-5" />,
    tags: ['dbt', 'SQL', 'Airflow'],
    description:
      'Designed a star-schema data mart and scheduled transformations with lineage and tests for data reliability.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A selection of work across machine learning, analytics engineering, and experimentation.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 transition hover:from-white/10 hover:to-white/[0.04]"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                {p.icon}
                <span className="text-xs font-medium">{p.title}</span>
              </div>
              <p className="mb-4 text-sm text-white/80">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition group-hover:ring-white/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
