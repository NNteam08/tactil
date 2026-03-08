"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { firstSeries, howToGet, guideNames } from "@/content/shop";
import { guideUrls } from "@/lib/guides";
import { RequestPurchaseForm } from "./RequestPurchaseForm";
import { GrantApplicationForm } from "./GrantApplicationForm";

const galleryImages = [
  { src: "/shop/tactile-box-full.png", alt: "Tactile box — full overview with both halves open, showing Braille panels, wheels, motors, electronics, gears, and chain" },
  { src: "/shop/braille-book-cover.png", alt: "Braille book cover — Tactile Ecosystem: FIRST Tech Championship by Overtime FTC #33611" },
  { src: "/shop/tactile-box-top.png", alt: "Close-up of top compartment — Braille panels, mecanum wheels, and motors" },
  { src: "/shop/tactile-box-electronics.png", alt: "Close-up of bottom compartment — REV Control Hub, Expansion Hub, gears, chain, and Arduino board" },
];

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

export default function FirstSeriesPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"request" | "grant" | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-medium">FIRST Series</span>
      </nav>

      {/* Product top: Gallery + Info sidebar */}
      <div className="grid gap-10 lg:grid-cols-[1fr_420px] mb-16">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 mb-4">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={900}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`overflow-hidden rounded-xl border-2 transition-all ${
                  selectedImage === i
                    ? "border-indigo-500 shadow-md shadow-indigo-500/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm">
            <span className="inline-flex rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              Flagship Product
            </span>
            <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              {firstSeries.title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              {firstSeries.subtitle}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                {firstSeries.price}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">per kit</span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
              {firstSeries.priceNote}
            </p>

            {/* What's included */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-5 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Kit includes
              </p>
              <ul className="space-y-3">
                {firstSeries.whatsIncluded.map((item, i) => {
                  const icons = ["/icons/icon-read.svg", "/icons/icon-box.svg", "/icons/icon-audio.svg"];
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <Image src={icons[i]} alt="" width={24} height={24} className="h-6 w-6 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setActiveTab("request")}
                className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/25 flex items-center justify-center gap-2"
              >
                <BoxIcon className="w-5 h-5" />
                Request a Kit
              </button>
              <button
                onClick={() => setActiveTab("grant")}
                className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <GiftIcon className="w-5 h-5" />
                Apply for a Grant
              </button>
            </div>

            <p className="mt-4 text-xs text-center text-slate-400 dark:text-slate-500">
              No online payment — we arrange everything after your request
            </p>
          </div>
        </div>
      </div>

      {/* Request / Grant forms (appear when CTA clicked) */}
      {activeTab && (
        <section id="get-kit" className="mb-16 scroll-mt-24">
          <div className="flex gap-1 mb-6 rounded-xl bg-slate-100 dark:bg-slate-800/50 p-1 max-w-md">
            <button
              onClick={() => setActiveTab("request")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "request"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Request a Kit
            </button>
            <button
              onClick={() => setActiveTab("grant")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "grant"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Apply for Grant
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8">
            {activeTab === "request" ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <BoxIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Request a Kit</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">We&apos;ll contact you to arrange purchase and delivery</p>
                  </div>
                </div>
                <RequestPurchaseForm />
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <GiftIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Apply for a Grant</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Free kits for schools and organizations in underserved regions</p>
                  </div>
                </div>
                <GrantApplicationForm />
              </>
            )}
          </div>
        </section>
      )}

      {/* How to Get section (always visible) */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          {howToGet.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {howToGet.options.map((opt: { key: "request" | "grant"; title: string; description: string; cta: string; icon: string }) => (
            <div
              key={opt.key}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
                opt.key === "request"
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              }`}>
                {opt.icon === "box" ? <BoxIcon className="w-6 h-6" /> : <GiftIcon className="w-6 h-6" />}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{opt.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{opt.description}</p>
              <button
                onClick={() => {
                  setActiveTab(opt.key);
                  document.getElementById("get-kit")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm ${
                  opt.key === "request"
                    ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/25"
                    : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25"
                }`}
              >
                {opt.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Product details */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          About this product
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
            <Image src="/icons/icon-box.svg" alt="" width={36} height={36} className="h-9 w-9 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">What is FIRST Tech Challenge</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{firstSeries.introFtc}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
            <Image src="/icons/icon-braille.svg" alt="" width={36} height={36} className="h-9 w-9 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Problem for blind students</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{firstSeries.problem}</p>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
            <div className="flex gap-3 mb-3">
              <Image src="/icons/icon-read.svg" alt="" width={36} height={36} className="h-9 w-9" />
              <Image src="/icons/icon-touch.svg" alt="" width={36} height={36} className="h-9 w-9" />
              <Image src="/icons/icon-hear.svg" alt="" width={36} height={36} className="h-9 w-9" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">How Tactile Ecosystem solves it</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{firstSeries.solution}</p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Free Guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={guideUrls.recreation}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">{guideNames.recreation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">Download →</span>
            </div>
          </Link>
          <Link
            href={guideUrls.translation}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </span>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">{guideNames.translation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">Download →</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
