export const AI_WORK_REPORT_URL =
  "https://app.heylemma.com/i/Y1HtNYP6CnsDDryefvy_WzSp";

export const LEMMA_APP_URL = "https://app.heylemma.com";
export const LEMMA_START_TRIAL_URL = `${LEMMA_APP_URL}/missions/new`;
export const LEMMA_SIGN_IN_URL = `${LEMMA_APP_URL}/login`;
export const LEMMA_BILLING_URL = `${LEMMA_APP_URL}/settings/account`;

export function getLemmaPlanUrl(
  plan: "starter" | "growth" | "scale",
): string {
  return `${LEMMA_BILLING_URL}?plan=${plan}`;
}
