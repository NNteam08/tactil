import Image from "next/image";
import Link from "next/link";
import { incomingSeries } from "@/content/shop";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Store header */}
      <div className="text-center mb-14">
        <div className="flex justify-center gap-4 mb-6">
          <Image src="/icons/icon-read.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <Image src="/icons/icon-touch.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <Image src="/icons/icon-hear.svg" alt="" width={36} height={36} className="h-9 w-9" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          Tactil Store
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Tactile learning kits for inclusive robotics education. Request a kit or apply for a grant — no online payment needed.
        </p>
      </div>

      {/* Featured Product */}
      <article className="mb-16">
        <Link
          href="/shop/first-series"
          className="group grid md:grid-cols-[1.2fr_1fr] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-xl transition-all"
        >
          <div className="overflow-hidden bg-slate-50 dark:bg-slate-800/30">
            <Image
              src="/shop/tactile-box-full.png"
              alt="Tactile box — full overview"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                Flagship
              </span>
              <span className="inline-flex rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Grant Available
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              FIRST Series
            </h2>

            {/* Kit includes mini icons */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Image src="/icons/icon-read.svg" alt="" width={20} height={20} className="h-5 w-5" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Braille Book</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/icon-box.svg" alt="" width={20} height={20} className="h-5 w-5" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Tactile Box</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/icon-audio.svg" alt="" width={20} height={20} className="h-5 w-5" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Audio Guide</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
              Complete Tactile Ecosystem for FIRST Tech Challenge — designed for blind and low-vision students.
            </p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">$120</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">per kit</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium ml-2">
                or free via grant
              </span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm shadow-indigo-600/25 w-fit">
              View Product →
            </span>
          </div>
        </Link>
      </article>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight text-center">
          How It Works
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
          No checkout or online payment — just three simple steps
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: "/icons/icon-braille.svg", title: "Browse", desc: "Explore the Tactile Ecosystem and learn about the product." },
            { icon: "/icons/icon-touch.svg", title: "Request or Apply", desc: "Submit a kit request for purchase, or apply for a free grant." },
            { icon: "/icons/icon-audio.svg", title: "We Contact You", desc: "Our team reaches out to arrange delivery and next steps." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 mx-auto mb-4"
              />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section>
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Coming Soon
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          More tactile learning series in development
        </p>
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {incomingSeries.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/30 p-6"
            >
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                {item.name}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-500">
                {item.tagline}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
