import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });

    try {
      // This demo simply fakes a send success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ loading: false, success: true });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold">Get in touch</h2>
            <p className="text-white/70">Have a project in mind or want to collaborate? Let’s chat.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@email.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              className="min-h-[120px] w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-60"
              disabled={status.loading}
            >
              <Send className="h-4 w-4" />
              {status.loading ? 'Sending...' : 'Send message'}
            </button>
            {status.success && (
              <span className="text-sm text-emerald-300">Message sent! I will get back to you soon.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
