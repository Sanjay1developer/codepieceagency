"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import SectionBadge from "@/components/section-badge";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
} from "@/src/components/scroll-reveal";

const services = [
  "Website Development",
  "SEO",
  "Performance Marketing",
  "Social Media Marketing",
  "Branding",
  "Graphic Design",
  "Video Production",
  "Website Maintenance",
  "AI Automation & Development",
  "Other",
];

type EnquiryFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof EnquiryFields, string>>;

function validateFields(fields: EnquiryFields): FieldErrors {
  const errors: FieldErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = fields.phone.replace(/\D/g, "");

  if (fields.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!emailPattern.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number with 7–15 digits.";
  }
  if (fields.company.trim().length < 2) {
    errors.company = "Please enter your company name.";
  }
  if (!fields.service) {
    errors.service = "Please choose a service.";
  }
  if (fields.message.trim().length < 20) {
    errors.message = "Please add a little more detail (at least 20 characters).";
  }

  return errors;
}

const controlClass =
  "mt-1.5 w-full rounded-[15px] border border-white/15 bg-white/[0.08] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-[13px] placeholder:font-normal placeholder:text-[#c1c9dc] focus:border-[#91adff] focus:bg-white/[0.12] focus:ring-4 focus:ring-[#7997ff]/20 sm:text-sm";

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields: EnquiryFields = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const nextErrors = validateFields(fields);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      event.currentTarget
        .querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
        ?.focus();
      return;
    }

    window.alert(
      `Thank you, ${fields.fullName.trim()}! Your enquiry form is complete. This is a demo form; no email has been sent.`,
    );
    event.currentTarget.reset();
  }

  function clearError(field: keyof EnquiryFields) {
    if (errors[field]) {
      setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    }
  }

  function errorFor(field: keyof EnquiryFields) {
    return errors[field] ? (
      <span id={`${field}-error`} className="mt-1.5 block text-xs font-medium text-[#c24157]">
        {errors[field]}
      </span>
    ) : null;
  }

  return (
    <section
      id="contact"
      className="site-section relative overflow-hidden bg-[#f2f4f9] text-[#101633]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(121,151,255,0.12),_transparent_34%)]" />

      <div className="site-container relative">
        <div className="grid overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_28px_80px_rgba(29,38,67,0.14)] lg:grid-cols-[1fr_0.92fr]">
          <aside className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <SectionBadge icon={Mail} label="Let's talk about your next move" />
            <h1 className="mt-7 max-w-xl text-[clamp(38px,4vw,62px)] font-black leading-[0.98] tracking-[-0.07em] text-[#111827]">
              Let&apos;s build a{" "}
              <span className="bg-[linear-gradient(110deg,#315bdc,#7964df_58%,#a76bd4)] bg-clip-text text-transparent">
                stronger digital future.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(15px,1vw,17px)] leading-[1.75] font-medium text-[#687187]">
              Tell us where you want your business to go. Whether you need a
              stronger brand, a better website, or marketing that performs,
              we&apos;ll help shape the right next step for your goals.
            </p>
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8992a7]">
                A good place to start
              </p>
              <ul className="mt-4 space-y-4">
                {[
                  "A thoughtful conversation about your goals",
                  "Recommendations tailored to your business",
                  "A clear path from idea to execution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-sm font-bold text-[#496de0]">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-[#3d465b]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#edf0f6] pt-5">
              <div className="flex -space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#315bdc]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7964df]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#a76bd4]" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8992a7]">
                Strategy <span className="px-1 text-[#c4cada]">/</span> Creative{" "}
                <span className="px-1 text-[#c4cada]">/</span> Growth
              </p>
            </div>
          </aside>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="relative m-3 overflow-hidden rounded-[24px] bg-[#0d1430] p-5 text-white shadow-[0_20px_50px_rgba(13,20,48,0.2)] sm:m-4 sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#536fe2]/20 blur-3xl" />
            <div className="relative">
            <div className="mb-5">
              <h2 className="text-xl font-black tracking-[-0.04em] text-white">
                Tell us about your project
              </h2>
              <p className="mt-1.5 text-xs text-[#b3bed9]">
                Complete the details below to get started.
              </p>
            </div>

            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <label className="block text-xs font-normal text-[#d2d9eb] sm:text-[11px]">
                Full Name
                <input
                  className={`${controlClass} ${errors.fullName ? "border-[#c24157]" : ""}`}
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  onChange={() => clearError("fullName")}
                  required
                />
                {errorFor("fullName")}
              </label>

              <label className="block text-xs font-normal text-[#d2d9eb] sm:text-[11px]">
                Email
                <input
                  className={`${controlClass} ${errors.email ? "border-[#c24157]" : ""}`}
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  maxLength={254}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                  required
                />
                {errorFor("email")}
              </label>

              <label className="block text-xs font-normal text-[#d2d9eb] sm:text-[11px]">
                Phone
                <input
                  className={`${controlClass} ${errors.phone ? "border-[#c24157]" : ""}`}
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  maxLength={25}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  onChange={() => clearError("phone")}
                  required
                />
                {errorFor("phone")}
              </label>

              <label className="block text-xs font-normal text-[#d2d9eb] sm:text-[11px]">
                Company
                <input
                  className={`${controlClass} ${errors.company ? "border-[#c24157]" : ""}`}
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  autoComplete="organization"
                  minLength={2}
                  maxLength={120}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  onChange={() => clearError("company")}
                  required
                />
                {errorFor("company")}
              </label>

              <label className="block text-xs font-normal text-[#d2d9eb] sm:col-span-2 sm:text-[11px]">
                Service
                <select
                  className={`${controlClass} ${errors.service ? "border-[#c24157]" : ""}`}
                  name="service"
                  defaultValue=""
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  onChange={() => clearError("service")}
                  required
                >
                  <option value="" disabled className="bg-white text-[#687187]">
                    Choose a service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-white text-[#101633]"
                    >
                      {service}
                    </option>
                  ))}
                </select>
                {errorFor("service")}
              </label>

              <label className="block text-xs font-normal text-[#d2d9eb] sm:col-span-2 sm:text-[11px]">
                Message
                <textarea
                  className={`${controlClass} min-h-32 resize-y ${errors.message ? "border-[#c24157]" : ""}`}
                  name="message"
                  placeholder="Share your goals, timeline, or what you need help with..."
                  minLength={20}
                  maxLength={1500}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                  required
                />
                {errorFor("message")}
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#315bdc] px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[0_8px_24px_rgba(49,91,220,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2548bd] hover:shadow-[0_12px_28px_rgba(49,91,220,0.38)]"
              >
                Send Enquiry
                <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/15">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
