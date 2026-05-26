export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO: "2026-05-01"
  author: string;
};

export const posts: Post[] = [
  {
    slug: "ai-made-building-easy-now-context-is-the-moat",
    title: "AI Made Building Easy. Now Context Is the Moat.",
    description:
      "AI made production cheap. The scarce resource is now knowing what to build, who wants it, why they care, and what to do next.",
    date: "2026-05-26",
    author: "Wissem Fathallah",
  },
  {
    slug: "people-do-not-hate-surveys-they-hate-being-processed",
    title: "People Do Not Hate Surveys. They Hate Being Processed.",
    description:
      "The best feedback does not come from bigger text boxes. It comes from asking one useful follow-up while the customer still remembers what happened.",
    date: "2026-05-26",
    author: "Wissem Fathallah",
  },
  {
    slug: "what-to-ask-before-rewriting-your-homepage",
    title: "What To Ask Before Rewriting Your Homepage",
    description:
      "A homepage rewrite is not a writing project. It is a buyer-language audit. Here is how to start with evidence instead of opinions.",
    date: "2026-05-06",
    author: "Wissem Fathallah",
  },
  {
    slug: "customer-feedback-is-not-evidence-until-it-survives-follow-up",
    title: "Customer Feedback Is Not Evidence Until It Survives a Follow-Up",
    description:
      "A customer comment is not evidence until it survives a follow-up. Here is how to turn shallow answers into decision-ready research.",
    date: "2026-04-27",
    author: "Wissem Fathallah",
  },
  {
    slug: "how-to-run-churn-interviews-that-tell-you-what-to-fix",
    title: "How to Run Churn Interviews That Tell You What to Fix",
    description:
      "A practical churn interview guide for finding what broke, when the customer lost trust, and what your team should fix first.",
    date: "2026-04-16",
    author: "Wissem Fathallah",
  },
  {
    slug: "customer-discovery-should-explain-why-people-buy-not-just-what-they-want",
    title: "Customer Discovery Should Explain Why People Buy, Not Just What They Want",
    description:
      "Feature requests are clues, not strategy. Discovery is useful when it reveals why someone buys, hesitates, switches, stays, or leaves.",
    date: "2026-04-01",
    author: "Wissem Fathallah",
  },
  {
    slug: "an-nps-score-is-a-signal-the-follow-up-is-the-research",
    title: "An NPS Score Is a Signal. The Follow-Up Is the Research.",
    description:
      "NPS tells you where to look. The follow-up is where the useful evidence appears: the moment, the expectation, the impact, and the next action.",
    date: "2026-03-01",
    author: "Wissem Fathallah",
  },
  {
    slug: "before-you-build-price-or-launch-ask-for-decision-evidence",
    title: "Before You Build, Price, or Launch, Ask for Decision Evidence",
    description:
      "How to stop making large decisions from scattered fragments and start collecting the evidence each decision actually needs.",
    date: "2026-02-22",
    author: "Wissem Fathallah",
  },
  {
    slug: "pricing-hesitation-is-usually-a-value-story-problem",
    title: "Pricing Hesitation Is Usually a Value Story Problem",
    description:
      "\"Too expensive\" is not a pricing conclusion. It is the beginning of a pricing perception interview.",
    date: "2026-02-14",
    author: "Wissem Fathallah",
  },
  {
    slug: "customer-language-is-a-product-input-not-a-copywriting-detail",
    title: "Customer Language Is a Product Input, Not a Copywriting Detail",
    description:
      "The words customers use reveal what they believe, compare against, fear, and need next. That language should shape product and GTM decisions.",
    date: "2026-02-07",
    author: "Wissem Fathallah",
  },
  {
    slug: "your-typeform-is-not-the-problem-your-missing-follow-up-is",
    title: "Your Typeform Is Not the Problem. Your Missing Follow-Up Is.",
    description:
      "Static forms collect the first answer. The important customer, sales, churn, and discovery workflows often need the story behind it.",
    date: "2026-01-27",
    author: "Wissem Fathallah",
  },
  {
    slug: "the-context-layer-for-ai-native-companies",
    title: "The Context Layer for AI-Native Companies",
    description:
      "AI-native teams can produce faster than they can understand. They need systems that collect and preserve human context for better decisions.",
    date: "2026-01-18",
    author: "Wissem Fathallah",
  },
  {
    slug: "when-a-form-should-become-a-conversation",
    title: "When a Form Should Become a Conversation",
    description:
      "Keep simple forms simple. Turn forms into adaptive conversations when the answer decides what to build, say, fix, sell, or support.",
    date: "2026-01-10",
    author: "Wissem Fathallah",
  },
  {
    slug: "the-danger-of-polished-strategy-from-shallow-inputs",
    title: "The Danger of Polished Strategy From Shallow Inputs",
    description:
      "AI can turn weak assumptions into finished-looking pages, plans, campaigns, and workflows. Better output starts with better context.",
    date: "2025-12-18",
    author: "Wissem Fathallah",
  },
  {
    slug: "ai-did-not-kill-customer-research-it-raised-the-standard",
    title: "AI Did Not Kill Customer Research. It Raised the Standard.",
    description:
      "When AI makes execution faster, weak research gets more expensive. The advantage shifts to teams with better human context.",
    date: "2025-12-03",
    author: "Wissem Fathallah",
  },
].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
