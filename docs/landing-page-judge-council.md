# Landing Page Judge Council

This council reviews every meaningful Lemma landing-page iteration before it is
considered ready.

## Judges

1. **YC clarity** — Can a visitor immediately say what Lemma is, who it is for,
   how it works, and what to do next?
2. **Plain language** — Can a nontechnical high-school reader explain the page
   back without learning Lemma's internal vocabulary?
3. **Category difference** — Does the page clearly separate Lemma from a
   LinkedIn sequencer by showing work that continues across days and weeks?
4. **CMO and conversion** — Does the order build understanding, trust, and
   intent without unsupported proof?
5. **Web design** — Do hierarchy, pacing, responsive behavior, and interaction
   make the story easier to understand?
6. **Product truth** — Is every feature, behavior, price, and promise supported
   by the current product?
7. **Skeptical buyer** — Would an independent professional, founder, or lean
   team know what they are buying and why they should try it?
8. **Accessibility and mobile** — Does the page remain readable, navigable, and
   coherent on a small screen and with assistive preferences?

## Decision rules

- Every judge scores the current page from 0 to 5 and names the three most
  important weaknesses.
- Product truth has veto power. A feature that is unavailable, an outcome that
  is not guaranteed, or a claim that cannot be supported is removed or narrowed
  before any other optimization.
- Repeated findings are merged. The council implements the smallest set of
  changes that addresses the largest shared weaknesses.
- The page is judged again after implementation and browser verification.
- An average score cannot hide a failed judge.

## Passing thresholds

- YC clarity: at least 4.5
- Plain language: 5.0 teach-back with no unexplained product jargon
- Category difference: at least 4.0
- CMO and conversion: at least 4.0
- Web design: at least 4.0
- Skeptical buyer: at least 4.0
- Accessibility and mobile: no known blocking issue
- Product truth: zero vetoes

## Iteration loop

1. Capture the current page at representative desktop and mobile widths.
2. Collect independent verdicts before judges see the synthesis.
3. Apply product-truth vetoes.
4. Rank the remaining findings by visitor impact, confidence, and effort.
5. Implement the three to five highest-impact corrections.
6. Run type, build, interaction, responsive, and accessibility checks.
7. Capture the result and run the council again.
8. Repeat until every threshold passes.

## Iteration 1 — initial verdict

| Judge | Score | Result |
| --- | ---: | --- |
| YC clarity | 2.7 | Fail |
| Plain language | 2.5 | Fail |
| Category difference | 3.0 | Fail |
| CMO and conversion | 2.3 | Fail |
| Web design and mobile | 2.9 | Fail |
| Skeptical buyer | 2.4 | Fail |
| Product truth | Vetoes present | Fail |

The shared finding was that the page explained Lemma's theory before it
explained the product. The first implementation therefore:

- states LinkedIn prospecting directly in the hero;
- moves the three-step workflow before the 28-day example;
- removes the standalone problem section;
- removes the voice and booking preview from the public example;
- replaces internal vocabulary with ordinary words;
- narrows claims to current product behavior;
- makes the mobile workflow copy-first and reduces decorative scrolling.

## Iteration 1 — second vote

| Judge | Score | Result |
| --- | ---: | --- |
| YC clarity | 4.6 | Pass |
| Plain language | 4.0 | Fail |
| Category difference | 3.7 | Fail |
| CMO and conversion | 4.1 | Pass |
| Web design and mobile | 4.1 | Pass |
| Skeptical buyer | 4.2 | Pass |
| Product truth | Zero vetoes | Pass |

Two judges remained below threshold. The next implementation therefore:

- replaces “prospecting” and “sequencer” with ordinary language;
- names research, allowed messages, waiting, follow-up, and takeover directly;
- acknowledges that message schedulers can run for weeks, then attacks their
  weakness when a reply, problem, or new decision changes the plan;
- makes preserved history and changed plans the category difference;
- further reduces decorative mobile art and increases small graph labels.

## Iteration 2 — final vote

| Judge | Score | Result |
| --- | ---: | --- |
| YC clarity | 4.9 | Pass |
| Plain language | 5.0 | Pass |
| Category difference | 4.3 | Pass |
| CMO and conversion | 4.2 | Pass |
| Web design and mobile | 4.5 | Pass |
| Skeptical buyer | 4.4 | Pass |
| Product truth | Zero vetoes | Pass |
| Accessibility and mobile | No blocker | Pass |

The final corrections:

- remove the remaining internal sales vocabulary from the 28-day example;
- state permissions as rules instead of implying approval of every message;
- compare Lemma with the limitation of a schedule without making an
  unsupported claim about every competitor;
- keep the 28-day example after the three-step explanation, where its detail
  proves the difference instead of delaying basic understanding.

Every judge now meets its threshold. The council remains the review process for
future meaningful landing-page iterations.
