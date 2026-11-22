/**
 * Visitor consent — Kenya Data Protection Act 2019 (ss. 25–32) &
 * Data Protection (General) Regulations 2021.
 *
 * - Opt-in: analytics stay off until the visitor accepts.
 * - Record of consent (s.32): choice, timestamp and policy version are kept
 *   in the visitor's browser. Bump CONSENT_VERSION whenever the cookies or
 *   privacy policy changes in a way that needs fresh consent; everyone is
 *   asked again.
 * - Withdrawal is as easy as giving consent: openConsentSettings() reopens
 *   the banner (footer "Cookie settings" link).
 */
import { useSyncExternalStore } from "react";

export const CONSENT_VERSION = "2026-11-22";
const STORAGE_KEY = "bns-consent";
const CHANGE_EVENT = "bns-consent-change";
const OPEN_EVENT = "bns-consent-open";

export interface ConsentRecord {
  analytics: boolean;
  decidedAt: string;
  version: string;
}

function read(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

// Cache so useSyncExternalStore gets a stable snapshot between changes.
let snapshot: ConsentRecord | null | undefined;
function getSnapshot(): ConsentRecord | null {
  if (snapshot === undefined) snapshot = read();
  return snapshot;
}

export function setConsent(analytics: boolean): void {
  const record: ConsentRecord = { analytics, decidedAt: new Date().toISOString(), version: CONSENT_VERSION };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
  snapshot = record;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      snapshot = read();
      onChange();
    }
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Current consent record, or null when the visitor hasn't decided (for this policy version). */
export function useConsent(): ConsentRecord | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenConsentSettings(handler: () => void): () => void {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
