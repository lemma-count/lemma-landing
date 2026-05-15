import Image from "next/image";

const useCases = [
  {
    title: "Consultants & researchers",
    body: "to run more client, expert, customer, or employee interviews without adding calendar time.",
    image: "/assets/use-case-consultants.png",
  },
  {
    title: "Product",
    body: "to understand what customers need, what they struggle with, and which product changes matter most.",
    image: "/assets/use-case-product.png",
  },
  {
    title: "Customer success & CX",
    body: "to uncover why customers complain, downgrade, renew, churn, or stop engaging.",
    image: "/assets/use-case-cx.png",
  },
  {
    title: "Marketing & growth",
    body: "to learn how buyers describe the problem, evaluate options, and decide between you and the alternatives.",
    image: "/assets/use-case-marketing.png",
  },
  {
    title: "HR & people",
    body: "to hear what employees actually think before decisions on culture, performance, or retention are made.",
    image: "/assets/use-case-hr.png",
  },
];

export function UseCases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-32">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          For people who need better answers before making decisions.
        </h2>

        <div className="mt-12 -mx-6 overflow-x-auto px-6 md:-mx-10 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex snap-x snap-mandatory gap-4 pb-2">
            {useCases.map((u) => (
              <li
                key={u.title}
                className="relative aspect-[3/4] w-[78vw] flex-none snap-start overflow-hidden rounded-lg md:w-[28%]"
              >
                <Image
                  src={u.image}
                  alt={u.title}
                  fill
                  sizes="(min-width: 768px) 28vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 text-white">
                  <h3 className="text-base font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-white/85">
                    {u.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
