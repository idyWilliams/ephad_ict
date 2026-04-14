"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import { useEphadPayment } from "@/lib/payments/useEphadPayment";
import type { CoursePayConfig, EnrolleeDetails, EphadPaymentResult } from "@/lib/payments/types";
import type { PaymentError } from "@use-africa-pay/core";
import { cn } from "@/lib/utils";

/** Tri-state of the modal flow */
type ModalStep = "form" | "loading" | "success" | "error";

interface EnrollModalProps {
  /** The course the user wants to pay for. Passing null closes the modal. */
  course: CoursePayConfig | null;
  onClose: () => void;
}

const WA_NUMBER = "2348000000000"; // ← replace with real EPHAD WhatsApp
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

function buildWaLink(course: CoursePayConfig, ref: string) {
  const msg = `Hi EPHAD, I just paid for *${course.name}* (Ref: ${ref}). Please confirm my enrollment.`;
  return WA_BASE + encodeURIComponent(msg);
}

/** Formats NGN nicely: ₦120,000 */
function formatNGN(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function Field({
  label, id, type = "text", value, onChange, placeholder, error,
}: {
  label: string; id: string; type?: string;
  value: string; onChange: (v: string) => void;
  placeholder: string; error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "bg-transparent border-b h-12 px-0 focus:outline-none transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide text-sm placeholder:text-[var(--lm-body)]/20 dark:placeholder:text-white/20",
          error
            ? "border-red-400 dark:border-red-400"
            : "border-[var(--lm-ink)]/20 dark:border-white/20 focus:border-[var(--lm-ink)] dark:focus:border-white"
        )}
      />
      {error && <p className="text-red-500 text-[11px] mt-0.5">{error}</p>}
    </div>
  );
}

export function EnrollModal({ course, onClose }: EnrollModalProps) {
  const { pay, loading } = useEphadPayment();

  const [step, setStep] = useState<ModalStep>("form");
  const [details, setDetails] = useState<EnrolleeDetails>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Partial<EnrolleeDetails>>({});
  const [result, setResult] = useState<EphadPaymentResult | null>(null);
  const [payError, setPayError] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset state when course changes
  useEffect(() => {
    if (course) {
      setStep("form");
      setDetails({ name: "", email: "", phone: "" });
      setErrors({});
      setResult(null);
      setPayError(null);
    }
  }, [course?.id]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  function validate(): boolean {
    const e: Partial<EnrolleeDetails> = {};
    if (!details.name.trim()) e.name = "Full name is required.";
    if (!details.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
      e.email = "A valid email is required.";
    if (!details.phone.trim() || details.phone.trim().length < 7)
      e.phone = "A valid phone number is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!course || !validate()) return;

    setStep("loading");

    await pay(course, details, {
      onSuccess: (res) => {
        setResult(res);
        setStep("success");
      },
      onClose: () => {
        // User closed Paystack modal mid-flow → return to form
        setStep("form");
      },
      onError: (err: PaymentError) => {
        setPayError(err.message ?? "Payment could not be completed. Please try again.");
        setStep("error");
      },
    });
  }

  if (!course) return null;

  return (
    <AnimatePresence>
      {course && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 md:inset-x-auto md:right-0 md:top-0 md:bottom-0 md:w-[480px] z-[101] flex flex-col top-[10%] md:top-0 max-h-[88vh] md:max-h-screen overflow-y-auto bg-[var(--lm-base)] dark:bg-[#0d0f1c] border border-[var(--lm-ink)]/10 dark:border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8 border-b border-[var(--lm-ink)]/5 dark:border-white/5 flex-shrink-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-brand-sky)] mb-1">
                  {step === "success" ? "Enrollment Confirmed" : step === "error" ? "Payment Failed" : "Enroll & Pay"}
                </p>
                <h3 className="text-xl font-bold text-[var(--lm-ink)] dark:text-white leading-tight max-w-[320px]">
                  {course.name}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs uppercase tracking-widest text-[var(--lm-body)]/40 dark:text-white/40 font-medium">{course.duration}</span>
                  <span className="text-xl font-black text-[var(--lm-ink)] dark:text-white">{formatNGN(course.priceNGN)}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[var(--lm-body)]/40 dark:text-white/40 hover:text-[var(--lm-ink)] dark:hover:text-white transition-colors flex-shrink-0 mt-1"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* ── FORM STEP ──────────────────────────────────────── */}
                {(step === "form" || step === "loading") && (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
                    <p className="text-[var(--lm-body)]/60 dark:text-white/60 text-sm font-light leading-relaxed mb-8">
                      {course.description}
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      <Field
                        label="Full Name *" id="enroll-name" value={details.name}
                        onChange={(v) => setDetails((d) => ({ ...d, name: v }))}
                        placeholder="Jane Doe" error={errors.name}
                      />
                      <Field
                        label="Email Address *" id="enroll-email" type="email" value={details.email}
                        onChange={(v) => setDetails((d) => ({ ...d, email: v }))}
                        placeholder="HELLO@EXAMPLE.COM" error={errors.email}
                      />
                      <Field
                        label="Phone Number *" id="enroll-phone" type="tel" value={details.phone}
                        onChange={(v) => setDetails((d) => ({ ...d, phone: v }))}
                        placeholder="+234 800 000 0000" error={errors.phone}
                      />

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={loading || step === "loading"}
                          className="group relative w-full h-16 bg-[var(--lm-ink)] dark:bg-white text-white dark:text-black overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b30] to-[var(--lm-ink)] dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="relative flex items-center justify-center gap-3 font-black uppercase tracking-[0.15em] text-sm">
                            {step === "loading" ? (
                              <><Loader2 size={18} className="animate-spin" /> Processing…</>
                            ) : (
                              <>Pay {formatNGN(course.priceNGN)} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                          </span>
                        </button>

                        <p className="text-center text-[11px] text-[var(--lm-body)]/40 dark:text-white/40 mt-4 font-light">
                          Secured by Paystack · SSL Encrypted
                        </p>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ── SUCCESS STEP ────────────────────────────────────── */}
                {step === "success" && result && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-8 flex flex-col gap-8"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-green-400/30 bg-green-400/10">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[var(--lm-ink)] dark:text-white mb-3">
                        Payment Confirmed.
                      </h4>
                      <p className="text-[var(--lm-body)]/60 dark:text-white/60 font-light leading-relaxed text-sm">
                        Thank you, <strong className="text-[var(--lm-ink)] dark:text-white">{result.enrollee.name}</strong>. Your payment for <strong className="text-[var(--lm-ink)] dark:text-white">{result.course.name}</strong> has been received.
                        Our team will reach out to <strong className="text-[var(--lm-ink)] dark:text-white">{result.enrollee.email}</strong> within 24 hours with onboarding details.
                      </p>
                    </div>

                    <div className="bg-[var(--lm-band)] dark:bg-white/5 p-4 border border-[var(--lm-ink)]/5 dark:border-white/5 text-xs font-mono text-[var(--lm-body)]/50 dark:text-white/40">
                      <p className="mb-1 uppercase tracking-widest font-bold">Transaction Reference</p>
                      <p className="break-all text-[var(--lm-ink)] dark:text-white font-bold">{result.reference}</p>
                    </div>

                    <a
                      href={buildWaLink(result.course, result.reference)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full h-14 flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#22c55e] transition-colors"
                    >
                      <MessageSquare size={18} />
                      Chat on WhatsApp for Confirmation
                    </a>

                    <button
                      onClick={onClose}
                      className="text-center text-xs uppercase tracking-widest text-[var(--lm-body)]/40 dark:text-white/40 hover:text-[var(--lm-ink)] dark:hover:text-white transition-colors py-2"
                    >
                      Close
                    </button>
                  </motion.div>
                )}

                {/* ── ERROR STEP ──────────────────────────────────────── */}
                {step === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-8 flex flex-col gap-8"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-red-400/30 bg-red-400/10">
                      <AlertTriangle size={32} className="text-red-500" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[var(--lm-ink)] dark:text-white mb-3">
                        Payment Unsuccessful.
                      </h4>
                      <p className="text-[var(--lm-body)]/60 dark:text-white/60 font-light leading-relaxed text-sm">
                        {payError ?? "Something went wrong. Please try again or contact us on WhatsApp."}
                      </p>
                    </div>

                    <button
                      onClick={() => { setStep("form"); setPayError(null); }}
                      className="w-full h-14 border border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white font-bold uppercase tracking-widest text-sm hover:bg-[var(--lm-ink)]/5 dark:hover:bg-white/5 transition-colors"
                    >
                      Try Again
                    </button>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi EPHAD, I tried to pay for " + course.name + " but the payment failed. Can you help?")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full h-14 flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#22c55e] transition-colors"
                    >
                      <MessageSquare size={18} />
                      Get Help on WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
