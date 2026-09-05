import Link from "next/link";
import { Container } from "./Container";
import { primaryNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-2xl">XCELLENC</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              The pursuit of becoming — in life, in work, through daily
              practice, and with the people who make it worth doing.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule pt-6 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} XCELLENC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-ink-soft">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-ink-soft">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink-soft">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
