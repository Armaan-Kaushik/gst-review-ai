const findings = [
  {
    severity: "High",
    title: "GSTR-2B ITC mismatch",
    description: "8 invoices do not match the current purchase register.",
    amount: "₹58,240",
    color: "bg-[#B74E45]",
    badge: "bg-[#F6E3E0] text-[#A23E36]",
  },
  {
    severity: "High",
    title: "Missing GSTIN",
    description: "4 supplier invoices are missing a valid GSTIN.",
    amount: "₹31,600",
    color: "bg-[#B74E45]",
    badge: "bg-[#F6E3E0] text-[#A23E36]",
  },
  {
    severity: "Medium",
    title: "Tax-rate variance",
    description: "6 invoices have a tax rate that needs verification.",
    amount: "₹12,820",
    color: "bg-[#B97828]",
    badge: "bg-[#F5E9D7] text-[#98661F]",
  },
];

const activities = [
  {
    title: "Purchase register uploaded",
    detail: "April 2026 · 186 invoice records",
    time: "Today, 10:42 AM",
  },
  {
    title: "Compliance review completed",
    detail: "April 2026 · 3 priority findings created",
    time: "Today, 10:44 AM",
  },
  {
    title: "March review report generated",
    detail: "Prepared for CA review",
    time: "Yesterday, 4:18 PM",
  },
];

const navigation = [
  { label: "Overview", href: "/dashboard", active: true },
  { label: "Reviews", href: "#reviews", active: false },
  { label: "Uploads", href: "#uploads", active: false },
  { label: "Reconciliation", href: "#reconciliation", active: false },
  { label: "Reports", href: "#reports", active: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#202522]">
      <header className="border-b border-[#DEDCD4] bg-[#FCFBF8]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#26342E] text-sm font-semibold text-[#F5F2EB]">
              G
            </span>
            <div>
              <p className="text-sm font-semibold leading-none">
                GST Review AI
              </p>
              <p className="mt-1 text-xs text-[#737770]">
                Compliance workspace
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            <button className="rounded-lg border border-[#DEDCD4] bg-[#FCFBF8] px-3 py-2 text-sm font-medium text-[#26342E]">
              Armaan Traders Pvt. Ltd.{" "}
              <span className="ml-1 text-[#737770]">⌄</span>
            </button>
            <button
              aria-label="Notifications"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEDCD4] text-sm text-[#26342E]"
            >
              ◌
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EEE8] text-sm font-semibold text-[#26342E]">
              AK
            </span>
          </div>
        </div>

        <nav className="mx-auto flex w-full max-w-7xl gap-6 overflow-x-auto px-6 lg:px-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`whitespace-nowrap border-b-2 py-3 text-sm font-medium transition ${
                item.active
                  ? "border-[#728B78] text-[#26342E]"
                  : "border-transparent text-[#737770] hover:text-[#26342E]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <section className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-[#728B78]">Overview</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Good evening, Armaan.
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-[#626962]">
              Your April 2026 compliance review is ready. Focus on the three
              priority findings before you prepare the CA review package.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg border border-[#DEDCD4] bg-[#FCFBF8] px-4 py-2.5 text-sm font-semibold text-[#26342E]">
              April 2026 <span className="ml-1 text-[#737770]">⌄</span>
            </button>
            <button className="rounded-lg bg-[#728B78] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5F7765]">
              Upload GST data <span className="ml-1">→</span>
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-[#DEDCD4] bg-[#FCFBF8] p-6 sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-[#737770]">
                  Compliance health
                </p>
                <div className="mt-4 flex items-end gap-3">
                  <p className="text-5xl font-semibold tracking-[-0.05em]">
                    84%
                  </p>
                  <p className="pb-1 text-sm font-medium text-[#B97828]">
                    Needs attention
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-[#F5E9D7] px-3 py-1.5 text-xs font-semibold text-[#98661F]">
                April 2026
              </span>
            </div>

            <div className="mt-7 h-3 overflow-hidden rounded-full bg-[#E5E9E4]">
              <div className="h-full w-[84%] rounded-full bg-[#728B78]" />
            </div>

            <div className="mt-6 grid gap-4 border-t border-[#E7E4DC] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold">186</p>
                <p className="mt-1 text-sm text-[#737770]">Invoices reviewed</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">3</p>
                <p className="mt-1 text-sm text-[#737770]">Priority findings</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">₹1.03L</p>
                <p className="mt-1 text-sm text-[#737770]">Amount to verify</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E2D9DF] bg-[#FBF8FA] p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#80667D]">✦</span>
              <p className="text-sm font-semibold text-[#3E363D]">
                Review note
              </p>
            </div>

            <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#30292F]">
              Start with three vendors.
            </h2>

            <p className="mt-3 leading-7 text-[#625A60]">
              Most of the April GSTR-2B mismatches are concentrated in three
              supplier accounts. Reviewing them first can resolve the largest
              share of the amount at risk.
            </p>

            <button className="mt-6 text-sm font-semibold text-[#695065] transition hover:text-[#4F394C]">
              View recommendations <span className="ml-1">→</span>
            </button>
          </article>
        </section>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#728B78]">
                  Priority review
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  Review queue
                </h2>
              </div>
              <button className="text-sm font-semibold text-[#26342E]">
                View all findings <span className="ml-1">→</span>
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#DEDCD4] bg-[#FCFBF8]">
              {findings.map((finding) => (
                <article
                  key={finding.title}
                  className="flex flex-col gap-4 border-b border-[#E7E4DC] p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${finding.color}`}
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{finding.title}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${finding.badge}`}
                        >
                          {finding.severity}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#737770]">
                        {finding.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 pl-6 sm:pl-0">
                    <p className="text-sm font-semibold text-[#26342E]">
                      {finding.amount}
                    </p>
                    <button className="text-sm font-semibold text-[#26342E]">
                      Review →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside>
            <p className="text-sm font-medium text-[#728B78]">Workspace log</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              Recent activity
            </h2>

            <div className="mt-5 rounded-2xl border border-[#DEDCD4] bg-[#FCFBF8] p-5">
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={activity.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 flex h-3 w-3 rounded-full border-2 border-[#728B78] bg-[#F5F2EB]" />
                      {index !== activities.length - 1 && (
                        <span className="mt-2 h-full min-h-10 w-px bg-[#DEDCD4]" />
                      )}
                    </div>

                    <div className="pb-1">
                      <p className="text-sm font-semibold">{activity.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#737770]">
                        {activity.detail}
                      </p>
                      <p className="mt-1 text-xs text-[#8A8E88]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-2xl border border-dashed border-[#BFCABF] bg-[#E8EEE8] p-6 sm:flex sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-sm font-semibold text-[#26342E]">
              Start a new review
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5E6A61]">
              Upload a purchase register, GSTR-2B export, or invoice data to
              begin a new compliance review.
            </p>
          </div>

          <button className="mt-5 rounded-lg bg-[#26342E] px-4 py-2.5 text-sm font-semibold text-[#F5F2EB] transition hover:bg-[#18251F] sm:mt-0">
            Upload documents <span className="ml-1">→</span>
          </button>
        </section>
      </div>
    </main>
  );
}
