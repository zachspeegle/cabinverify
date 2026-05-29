"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  property: string;
  issue: string;
  referral: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  property: "",
  issue: "",
  referral: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Connect to Formspree or similar — endpoint: https://formspree.io/f/YOUR_ID
    // Replace the fetch below with: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } })
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-mist border border-smoky-forest/30 rounded p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-smoky-forest/10 flex items-center justify-center mx-auto mb-4">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#2E5E3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-hollow font-semibold text-lg mb-2">
          Request received
        </h3>
        <p className="text-slate text-sm leading-relaxed">
          We&rsquo;ve received your request. Expect a response within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-hollow mb-1">
          Your name <span className="text-amber">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-hollow mb-1">
          Email address <span className="text-amber">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-hollow mb-1">
          Phone number{" "}
          <span className="text-slate/60 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors"
          placeholder="(865) 555-0100"
        />
      </div>

      <div>
        <label htmlFor="property" className="block text-sm font-medium text-hollow mb-1">
          Property name or address <span className="text-amber">*</span>
        </label>
        <input
          id="property"
          name="property"
          type="text"
          required
          value={form.property}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors"
          placeholder="123 Ridgeline Dr., Gatlinburg, TN"
        />
      </div>

      <div>
        <label htmlFor="issue" className="block text-sm font-medium text-hollow mb-1">
          Describe the reported issue <span className="text-amber">*</span>
        </label>
        <textarea
          id="issue"
          name="issue"
          required
          rows={4}
          value={form.issue}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors resize-y"
          placeholder="Briefly describe what was reported — what item, what the reported condition is, and any relevant context."
        />
      </div>

      <div>
        <label htmlFor="referral" className="block text-sm font-medium text-hollow mb-1">
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          value={form.referral}
          onChange={handleChange}
          className="w-full border border-slate/30 rounded-sm px-4 py-2.5 text-sm text-hollow bg-white focus:outline-none focus:border-smoky-forest transition-colors"
        >
          <option value="">Select one</option>
          <option value="google">Google</option>
          <option value="pm-referral">Property manager referral</option>
          <option value="owner-referral">Owner referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={submitting}
          className="w-full justify-center py-3"
        >
          {submitting ? "Submitting…" : "Submit Verification Request"}
        </Button>
      </div>

      <p className="text-slate/50 text-xs text-center">
        We respond to all requests within one business day.
      </p>
    </form>
  );
}
