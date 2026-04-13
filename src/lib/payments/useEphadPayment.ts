/**
 * ─── EPHAD Payment Service ──────────────────────────────────────────────────
 *
 * Thin wrapper around @use-africa-pay/core configured for EPHAD.
 *
 * ENV VARIABLES REQUIRED (.env.local):
 *   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxx   ← your Paystack key
 *   NEXT_PUBLIC_PAYMENT_TEST_MODE=true             ← set to false in production
 *
 * This module is intentionally small. All UX (modal, form, states) lives in
 * components/ui/EnrollModal.tsx. This file handles only the payment init call.
 */

import { useAfricaPay, PaystackAdapter } from "@use-africa-pay/core";
import type { PaymentResponse, PaymentError } from "@use-africa-pay/core";
import type { CoursePayConfig, EnrolleeDetails, EphadPaymentResult } from "./types";

// ─── ENV / GLOBAL CONFIG ─────────────────────────────────────────────────────
//
// CONFIGURE HERE:  set your Paystack public key in .env.local
// The app works in test mode when NEXT_PUBLIC_PAYMENT_TEST_MODE is absent.
//
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "pk_test_placeholder";

const TEST_MODE =
  process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE !== "false"; // default: test

const BUSINESS_NAME = "EPHAD ICT Academy";
const CURRENCY = "NGN" as const;

// ─── REFERENCE GENERATOR ─────────────────────────────────────────────────────
function generateReference(courseId: string): string {
  return `EPHAD-${courseId.toUpperCase()}-${Date.now()}`;
}

// ─── THE HOOK ─────────────────────────────────────────────────────────────────
/**
 * useEphadPayment
 *
 * Returns { pay, loading, error, reset }.
 * `pay` accepts a course and enrollee details, then opens the Paystack modal.
 *
 * Usage:
 *   const { pay, loading, error } = useEphadPayment();
 *   pay(course, enrollee, { onSuccess, onClose, onError });
 */
export function useEphadPayment() {
  const { initializePayment, loading, error, reset } = useAfricaPay();

  async function pay(
    course: CoursePayConfig,
    enrollee: EnrolleeDetails,
    callbacks: {
      onSuccess: (result: EphadPaymentResult) => void;
      onClose?: () => void;
      onError?: (err: PaymentError) => void;
    }
  ) {
    const reference = generateReference(course.id);

    await initializePayment({
      provider: "paystack",
      adapter: PaystackAdapter,
      publicKey: PUBLIC_KEY,
      testMode: TEST_MODE,
      amount: course.priceNGN,
      currency: CURRENCY,
      reference,
      user: {
        name: enrollee.name,
        email: enrollee.email,
        phonenumber: enrollee.phone,
      },
      metadata: {
        business: BUSINESS_NAME,
        courseId: course.id,
        courseName: course.name,
        category: course.category,
        custom_fields: [
          { display_name: "Course", variable_name: "course", value: course.name },
          { display_name: "Duration", variable_name: "duration", value: course.duration },
          { display_name: "Student Name", variable_name: "student_name", value: enrollee.name },
        ],
      },
      onSuccess: (response: PaymentResponse) => {
        callbacks.onSuccess({
          reference: response.reference,
          transactionId: response.transactionId,
          paidAt: response.paidAt,
          course,
          enrollee,
        });
      },
      onClose: () => {
        callbacks.onClose?.();
      },
      onError: (err: PaymentError) => {
        callbacks.onError?.(err);
      },
    });
  }

  return { pay, loading, error, reset };
}
