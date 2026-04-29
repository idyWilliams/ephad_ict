/**
 * Shared types for the EPHAD payment module.
 * These extend the @use-africa-pay/core types with our own domain types.
 */

export type PaymentCategory =
  | "adults-foundational"
  | "adults-career"
  | "youth";

/** A fully-described course that can be purchased */
export interface CoursePayConfig {
  /** Unique slug — matches the id in src/data/index.ts */
  id: string;
  /** Display name shown in the modal and on Paystack */
  name: string;
  /** Short description shown in the modal */
  description: string;
  /** Price in Nigerian Naira (not kobo) */
  priceNGN: number;
  /** Human-readable duration e.g. "8 weeks" */
  duration: string;
  /** Which product line this course belongs to */
  category: PaymentCategory;
}

/** What the EnrollModal collects before payment */
export interface EnrolleeDetails {
  name: string;
  email: string;
  phone: string;
}

/** Returned from a successful payment */
export interface EphadPaymentResult {
  reference: string;
  transactionId?: string;
  paidAt?: string;
  course: CoursePayConfig;
  enrollee: EnrolleeDetails;
}
