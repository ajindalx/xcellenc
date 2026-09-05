"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { primaryNav } from "@/lib/nav";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          XCELLENC
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/join"
            className="inline-flex items-center rounded-sm bg-accent-strong px-5 py-2.5 text-[14px] font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Join the Circle
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-rule lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[17px] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit items-center rounded-sm bg-accent-strong px-5 py-2.5 text-[14px] font-medium text-on-accent"
            >
              Join the Circle
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
