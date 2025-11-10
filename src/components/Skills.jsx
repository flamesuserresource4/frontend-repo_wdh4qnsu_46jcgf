import React from 'react';
import { Cpu, Sigma, Cloud, LineChart, Code2 } from 'lucide-react';

const skills = [
  { group: 'Machine Learning', items: ['Scikit-learn', 'PyTorch', 'XGBoost', 'LightGBM'] },
  { group: 'Data', items: ['SQL', 'Pandas', 'dbt', 'Airflow'] },
  { group: 'Cloud & MLOps', items: ['AWS', 'Docker', 'FastAPI', 'MLflow'] },
  { group: 'Visualization', items: ['Plotly', 'Seaborn', 'Power BI', 'Looker'] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <Cpu className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold">Skills & Tools</h2>
            <p className="text-white/70">Technologies I use to ship reliable, data-driven solutions.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-medium text-emerald-300">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <Sigma className="h-4 w-4" />
              <span className="text-sm font-medium">Statistics</span>
            </div>
            <p className="text-sm text-white/80">Hypothesis testing, experiment design, regression, Bayesian methods</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <LineChart className="h-4 w-4" />
              <span className="text-sm font-medium">Analytics</span>
            </div>
            <p className="text-sm text-white/80">KPI design, cohort analysis, funnel analytics, A/B testing
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <Cloud className="h-4 w-4" />
              <span className="text-sm font-medium">Cloud</span>
            </div>
            <p className="text-sm text-white/80">S3, Lambda, ECS, Step Functions, CloudWatch</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <Code2 className="h-4 w-4" />
              <span className="text-sm font-medium">Engineering</span>
            </div>
            <p className="text-sm text-white/80">Clean code, testing, APIs, packaging, CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
