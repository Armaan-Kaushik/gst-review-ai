const workflowSteps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Bring invoices, purchase registers, and GST return data into one secure workspace.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Identify mismatches, incomplete records, and items that need attention before filing.",
  },
  {
    number: "03",
    title: "Resolve",
    description:
      "Organise findings, prioritise action, and prepare a clear review package for your CA.",
  },
];

const features = [
  "Invoice and GST data review",
  "GSTR-2B reconciliation workspace",
  "Exception and risk prioritisation",
  "CA-ready review summaries",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#202522]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="GST Review AI home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#26342E] text-lg font-semibold text-[#F5F2EB]">
            G
          </span>
          <span className="text-base font-semibold tracking-tight">
            GST Review AI
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[#5F685F] md:flex">
          <a className="transition hover:text-[#202522]" href="#workflow">
            Workflow
          </a>
          <a className="transition hover:text-[#202522]" href="#features">
            Features
          </a>
          <a className="transition hover:text-[#202522]" href="#review">
            For CAs
          </a>
        </nav>

        <a
          href="#review"
          className="rounded-lg border border-[#26342E] px-4 py-2 text-sm font-medium text-[#26342E] transition hover:bg-[#26342E] hover:text-[#F5F2EB]"
        >
          Start review
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium text-[#728B78]">
            <span className="h-2 w-2 rounded-full bg-[#728B78]" />
            Pre-CA GST compliance workspace
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#202522] sm:text-6xl">
            Review GST records before they become filing problems.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#626962]">
            GST Review AI helps businesses organise invoices, uncover
            reconciliation exceptions, and prepare clearer review packs for
            Chartered Accountants.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#review"
              className="inline-flex items-center justify-center rounded-lg bg-[#728B78] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5F7765]"
            >
              Start a compliance review
              <span className="ml-2">→</span>
            </a>

            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-lg border border-[#DEDCD4] bg-[#FCFBF8] px-5 py-3 text-sm font-semibold text-[#26342E] transition hover:border-[#728B78]"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#626962]">
            <span className="flex items-center gap-2">
              <span className="text-[#728B78]">✓</span> Built for GST review
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#728B78]">✓</span> Clear exception queues
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#728B78]">✓</span> CA-ready summaries
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-[#DEDCD4] bg-[#FCFBF8] p-5 shadow-[0_24px_70px_rgba(38,52,46,0.10)] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#E7E4DC] pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#737770]">
                April 2026
              </p>
              <h2 className="mt-1 text-lg font-semibold">Review overview</h2>
            </div>
            <span className="rounded-full bg-[#F3E4D5] px-3 py-1 text-xs font-semibold text-[#B97828]">
              Needs attention
            </span>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E3E0D8] bg-[#F9F8F4] p-4">
              <p className="text-sm text-[#737770]">Compliance health</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">84%</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E3E7E1]">
                <div className="h-full w-[84%] rounded-full bg-[#728B78]" />
              </div>
            </div>

            <div className="rounded-xl border border-[#E3E0D8] bg-[#F9F8F4] p-4">
              <p className="text-sm text-[#737770]">Priority findings</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">03</p>
              <p className="mt-4 text-xs font-medium text-[#B74E45]">
                High-priority review needed
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#E2D9DF] bg-[#FBF8FA] p-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#80667D]">✦</span>
              <p className="text-sm font-semibold text-[#3E363D]">
                Review note
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-[#625A60]">
              Three vendors account for most GSTR-2B mismatches this period.
            </p>
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">Review queue</p>
              <span className="text-xs text-[#737770]">3 open findings</span>
            </div>

            <div className="divide-y divide-[#E7E4DC] rounded-xl border border-[#E3E0D8]">
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B74E45]" />
                  <div>
                    <p className="text-sm font-medium">GSTR-2B ITC mismatch</p>
                    <p className="mt-1 text-xs text-[#737770]">
                      8 invoices · ₹58,240
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#26342E]">→</span>
              </div>

              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B74E45]" />
                  <div>
                    <p className="text-sm font-medium">Missing GSTIN</p>
                    <p className="mt-1 text-xs text-[#737770]">
                      4 invoices · ₹31,600
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#26342E]">→</span>
              </div>

              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B97828]" />
                  <div>
                    <p className="text-sm font-medium">Tax-rate variance</p>
                    <p className="mt-1 text-xs text-[#737770]">
                      6 invoices · ₹12,820
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#26342E]">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="border-y border-[#DEDCD4] bg-[#FCFBF8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#728B78]">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              A clearer path from records to review.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workflowSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-[#E3E0D8] bg-[#FCFBF8] p-6"
              >
                <p className="text-sm font-semibold text-[#728B78]">
                  {step.number}
                </p>
                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#626962]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-[#728B78]">
              Built for review
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Keep the filing conversation focused on what matters.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-[#DEDCD4] bg-[#FCFBF8] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EEE8] text-sm font-semibold text-[#26342E]">
                  ✓
                </span>
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="review"
        className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8"
      >
        <div className="rounded-2xl bg-[#26342E] px-7 py-12 text-[#F5F2EB] sm:px-12 sm:py-16">
          <p className="text-sm font-medium text-[#BFD0C1]">Ready to begin?</p>
          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Bring structure to your GST compliance review.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#D4DED4]">
                Upload records, focus on meaningful exceptions, and make CA
                review more efficient.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#F5F2EB] px-5 py-3 text-sm font-semibold text-[#26342E] transition hover:bg-white"
            >
              Create your workspace
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#DEDCD4] px-6 py-7 text-center text-sm text-[#737770]">
        © 2026 GST Review AI · Pre-CA GST Compliance Workspace
      </footer>
    </main>
  );
}
