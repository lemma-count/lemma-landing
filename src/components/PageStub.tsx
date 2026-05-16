export function PageStub({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <main className="pt-8 md:pt-12">
      <div className="mx-auto max-w-[1280px] px-6 pb-32 md:px-10">
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
          {body}
        </p>
      </div>
    </main>
  );
}
