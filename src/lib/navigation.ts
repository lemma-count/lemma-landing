export type NavGroupId = "useCases" | "resources";

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  id: NavGroupId;
  label: string;
  links: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    id: "useCases",
    label: "Use cases",
    links: [
      { label: "Founders", href: "/founders" },
      { label: "Product", href: "/product-growth" },
      { label: "Marketing", href: "/marketing" },
      { label: "Sales", href: "/sales" },
      { label: "Customer success", href: "/customer-success" },
      { label: "Consultants", href: "/consultants" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Context layer thesis", href: "/blog/ai-made-building-easy-now-context-is-the-moat" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export const productLinks: NavLink[] = [
  { label: "Product", href: "/product" },
];

export const primaryLinks: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
