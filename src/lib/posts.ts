export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO: "2026-05-01"
  author: string;
};

// Add new posts here. MDX file goes in src/content/posts/<slug>.mdx
export const posts: Post[] = [
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
];

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
