import type { Metadata } from "next";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xcellenc.com"),
  title: {
    default: "XCELLENC — The Pursuit of Becoming",
    template: "%s — XCELLENC",
  },
  description:
    "Excellence isn't perfection or relentless achievement. It's the intentional pursuit of becoming better through things that matter — in life, work, practice, and the people around you.",
  openGraph: {
    title: "XCELLENC — The Pursuit of Becoming",
    description:
      "Excellence isn't perfection or relentless achievement. It's the intentional pursuit of becoming better through things that matter.",
    siteName: "XCELLENC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${workSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
