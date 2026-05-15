import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Blog — Lemma" };

export default function BlogPage() {
  return (
    <PageStub
      title="Blog"
      body="Blog index coming soon. Send the Framer screenshots and we'll wire it up."
    />
  );
}
